import { useState } from "react";

import Select from "../../../../components/common/Select/Select";
import Chip from "../../../../components/common/Chip/Chip";
import { useKPIsData } from "../../state/hooks/useKPIsData";
import TextField from "../../../../components/common/Inputs/TextField";

const KPIsForm = () => {
  const { kpis, selectedKPIs, kpisTags, updateSelectedKPI } = useKPIsData();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const toggleIsPasswordShown = () => setIsPasswordShown((isShown) => !isShown);

  const inputs = [
    {
      id: "name",
      value: name,
      onChange: setName,
      label: "Full Name",
    },
    {
      id: "email",
      value: email,
      onChange: setEmail,
      label: "Email",
      placeholder: "Llalalal",
    },
    {
      id: "phone",
      value: phone,
      onChange: setPhone,
      label: "Phone No",
      size: "small",
    },
    {
      id: "password",
      value: password,
      onChange: setPassword,
      label: "Password",
      size: "small",
      isToggled: isPasswordShown,
      onToggle: toggleIsPasswordShown,
      type: isPasswordShown ? "text" : "password",
    },
  ];

  return (
    <div className="kpis-form">
      {inputs.map((input) => (
        <TextField key={input.id} {...input} />
      ))}

      {selectedKPIs.map((selectedKPI, kpiIdx) => (
        <div className={`kpi-${kpiIdx}`} key={kpiIdx}>
          <Select
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
    </div>
  );
};

export default KPIsForm;
