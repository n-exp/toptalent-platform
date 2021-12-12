import RadioField from '../../../../components/common/Inputs/Radio';
import Chip from '../../../../components/common/Chip/Chip';
import { useKPIsData } from '../../state/hooks/useKPIsData';
import NewSelect from '../../../../components/common/Inputs/Select';
import CheckboxField from '../../../../components/common/Inputs/Checkbox';
import Accordion from '../../../../components/common/controls/Accordion/Accordion';
import DatePickerField from '../../../../components/common/Inputs/DatePicker';

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

  return (
    <div className="kpis-form">
      <div className="uk-margin">
        <Chip isSelected={true} title="Customer Segmentation" />
        <Chip
          isSelected={false}
          title="Data Discovery
"
        />
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

      {radios.map((radio, radioIdx) => (
        <RadioField
          key={radioIdx}
          id={radioIdx}
          label={radio}
          // checked={Math.random() > 0.5}
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
