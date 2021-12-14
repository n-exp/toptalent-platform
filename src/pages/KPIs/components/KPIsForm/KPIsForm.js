import RadioField from '../../../../components/common/Inputs/Radio';
import Chip from '../../../../components/common/Chip/Chip';
import { useKPIsData } from '../../state/hooks/useKPIsData';
import NewSelect from '../../../../components/common/Inputs/Select';
import CheckboxField from '../../../../components/common/Inputs/Checkbox';
import Accordion from '../../../../components/common/controls/Accordion/Accordion';
import DatePickerField from '../../../../components/common/Inputs/DatePicker';
import ButtonUploader from '../../../../components/common/controls/Uploader/ButtonUploader';
import ImagePicker from '../../../../components/common/controls/ImagePicker/ImagePicker';
import { useAuthData } from '../../state/hooks/useAuthData';
import Tag from '../../../../components/common/Tag/Tag';
import TextareaField from '../../../../components/common/Inputs/Textarea';
import ArrowLeftIcon from '../../../../assets/icons/ArrowLeftIcon';
import { PlusIcon } from '../../../../assets/icons/PlusIcon';
import TextField from '../../../../components/common/Inputs/TextField';
import ImageGallery from '../../../../components/common/ImageGallery/ImageGallery';
import { useProfileData } from '../../state/hooks/useProfileData';

const tags = [
  { title: 'HTML', color: 'default' },
  { title: 'JavaScripts', color: 'primary' },
  { title: 'CSS', size: 'large', color: 'primary' }
];

const radios = [
  'Less then 1 month',
  '1-4 months',
  '5-12 months',
  'More then 12 months',
  'I will decide later'
];

const KPIsForm = () => {
  const { kpis, selectedKPIs, kpisTags, checkboxes, updateSelectedKPI, toggleCheckbox } =
    useKPIsData();
  const { avatar, setAvatar } = useAuthData();
  const { images, setImages } = useProfileData();

  return (
    <div className="kpis-form">
      <div className="uk-margin">
        <ImageGallery images={images} onChange={setImages} />
        {/* <ImageGallery images={images.slice(0,6)} onChange={setImages} /> */}
      </div>

      <div className="uk-margin">
        <div className="uk-grid-small" uk-grid="">
          <div className="uk-width-1-6">
            <ImagePicker src={avatar} onChange={setAvatar} />
          </div>

          <div className="uk-width-expand uk-margin-auto-vertical">
            <ButtonUploader onChange={setAvatar} text={'Add Profile Photo'} />
          </div>
        </div>
      </div>

      <div className="uk-margin">
        <div uk-grid="">
          <div className="uk-width-expand">
            <h1>JUSTIN NGUYEN</h1>
            <p>DESIGN & FONTEND DEVELOPER</p>
            <h4>LOCATION</h4>
            <p>Justin is now available for hire</p>
          </div>
          <div className="uk-width-3-5">
            <ImagePicker src={avatar} variant="avatar" onChange={setAvatar} />
          </div>
        </div>
      </div>

      <div className="uk-margin">
        <Chip isSelected={true} title="Customer Segmentation" />
        <Chip isSelected={false} title="Data Discovery" />
      </div>

      <div className="uk-margin">
        <div>Time Picker</div>
        <DatePickerField selectTime />
      </div>

      <div className="">
        <div>Single date selector</div>
        <DatePickerField />
      </div>

      <div className="uk-margin">
        <div>Range dates selector</div>
        <DatePickerField isRange={true} />
      </div>

      {tags.map((tag, tagIdx) => (
        <Tag key={tagIdx} title={tag.title} color={tag.color} size={tag.size} />
      ))}

      <TextareaField
        label="Short Description"
        placeholder="Add short description"
        onChange={() => {}}
      />
      <TextareaField placeholder="Add short description" onChange={() => {}} />
      <TextareaField label="Short Description" onChange={() => {}} />

      <TextField icon={ArrowLeftIcon} />
      <TextField icon={PlusIcon} />
      <TextField />

      {radios.map((radio, radioIdx) => (
        <RadioField
          key={radioIdx}
          id={radioIdx}
          label={radio}
          checked={radioIdx % 2}
          onChange={() => {}}
        />
      ))}

      <div className="uk-child-width-1-1 uk-margin" uk-grid="">
        {checkboxes.map(({ id, label, checked }) => (
          <div key={id}>
            <CheckboxField id={id} label={label} checked={checked} onChange={toggleCheckbox} />
          </div>
        ))}
      </div>

      <div className="uk-child-width-1-1 uk-grid-small uk-margin" uk-grid="">
        {kpis.map((selectedKPI, kpiIdx) => (
          <div key={kpiIdx}>
            <Accordion title={selectedKPI.label}>
              <div className="kpi-tags uk-grid-small uk-margin" uk-grid="">
                {kpisTags[selectedKPI.value].map((chip, chipIdx) => (
                  <Chip key={chipIdx} title={chip} />
                ))}
              </div>

              <div className="expand-more uk-margin-bottom">See more</div>
            </Accordion>
          </div>
        ))}
      </div>

      {selectedKPIs.map((selectedKPI, kpiIdx) => (
        <div className={`kpi-${kpiIdx}`} key={kpiIdx}>
          <NewSelect
            options={kpis}
            value={selectedKPI}
            onChange={(value) => updateSelectedKPI(value, kpiIdx)}
          />

          <div className="kpi-tags uk-grid-small uk-margin" uk-grid="">
            {kpisTags[selectedKPI.value].map((chip, chipIdx) => (
              <Chip key={chipIdx} title={chip} />
            ))}
          </div>

          <div className="expand-more uk-margin-bottom">See more</div>
        </div>
      ))}
      <div>
        <button className="uk-button " type="button" uk-toggle="target: #verify-modal">
          Verify Modal
        </button>
      </div>
    </div>
  );
};

export default KPIsForm;
