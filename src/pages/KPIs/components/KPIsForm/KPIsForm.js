import { useCallback } from 'react';

import RadioField from '../../../../components/common/Inputs/Radio';
import Chip from '../../../../components/common/Chip/Chip';
import { useKPIsData } from '../../state/hooks/useKPIsData';
import Authcontainer from '../../../../components/AuthContainer';
import { useAuthData } from '../../state/hooks/useAuthData';
import TextField from '../../../../components/common/Inputs/TextField';
import NewSelect from '../../../../components/common/Inputs/Select';
import CheckboxField from '../../../../components/common/Inputs/Checkbox';
import Accordion from '../../../../components/common/controls/Accordion/Accordion';
import FormFooter from '../FormFooter';
import FormHeader from '../FormHeader';
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
  const {
    selectedProfession,
    username,
    email,
    password,
    phone,
    isPasswordShown,
    setSelectedProfession,
    setUsername,
    setEmail,
    setPassword,
    setPhone,
    toggleIsPasswordShown
  } = useAuthData();

  const inputs = [
    {
      id: 'profession',
      type: 'select',
      options: kpis,
      value: selectedProfession,
      onChange: setSelectedProfession,
      label: 'Your Professional fill?'
    },
    {
      id: 'name',
      value: username,
      onChange: setUsername,
      label: 'Full Name'
    },
    {
      id: 'email',
      value: email,
      onChange: setEmail,
      label: 'Email Address',
      placeholder: 'Enter Email Address'
    },
    {
      id: 'phone',
      value: phone,
      onChange: setPhone,
      label: 'Phone No',
      size: 'small'
    },
    {
      id: 'password',
      value: password,
      onChange: setPassword,
      label: 'Password',
      size: 'small',
      isToggled: isPasswordShown,
      onToggle: toggleIsPasswordShown,
      type: isPasswordShown ? 'text' : 'password'
    }
  ];

  const buttons = [{ id: 'submit', type: 'submit', text: 'Log in' }];

  const header = <FormHeader />;
  const footer = <FormFooter />;

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      console.log('[AUTH CONTAINER] -> fields: ', {
        selectedProfession,
        username,
        email,
        password,
        phone,
        isPasswordShown
      });
    },
    [selectedProfession, username, email, password, phone, isPasswordShown]
  );

  return (
    <div className="kpis-form">
      <Authcontainer
        title="Welcome back"
        header="Login to your account"
        description="We provide access to top companies, a community of experts, and resources that can help accelerate your career."
        form={{
          header,
          inputs,
          buttons,
          footer
        }}
        footer={{ text: "Don't have an account?", link: '/signup', linkText: 'Join free today' }}
        onSubmit={handleSubmit}
      />

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

      {inputs.map((input) => (
        <TextField key={input.id} {...input} />
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
                  <Chip key={chipIdx}>{chip}</Chip>
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
              <Chip key={chipIdx}>{chip}</Chip>
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
