import { useState } from 'react';

import Chip from '../../../../components/common/Chip/Chip';
import { useKPIsData } from '../../state/hooks/useKPIsData';
import TextField from '../../../../components/common/Inputs/TextField';
import NewSelect from '../../../../components/common/Inputs/Select';
import CheckboxField from '../../../../components/common/Inputs/Checkbox';
import Accordion from '../../../../components/common/controls/Accordion/Accordion';

const KPIsForm = () => {
  const { kpis, selectedKPIs, kpisTags, checkboxes, updateSelectedKPI, toggleCheckbox } =
    useKPIsData();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const toggleIsPasswordShown = () => setIsPasswordShown((isShown) => !isShown);

  const inputs = [
    {
      id: 'name',
      value: name,
      onChange: setName,
      label: 'Full Name'
    },
    {
      id: 'email',
      value: email,
      onChange: setEmail,
      label: 'Email',
      placeholder: 'Llalalal'
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

  return (
    <div className="kpis-form">
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
