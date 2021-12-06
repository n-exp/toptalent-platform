import Select from "../../../../components/common/Select/Select";
import Chip from "../../../../components/common/Chip/Chip";
import RadioField from "../../../../components/common/Inputs/Radio";
import { useKPIsData } from "../../state/hooks/useKPIsData";

const radios = [
  "Less then 1 month",
  "1-4 months",
  "5-12 months",
  "More then 12 months",
  "I will decide later",
];

const KPIsForm = () => {
  const { kpis, selectedKPIs, kpisTags, updateSelectedKPI } = useKPIsData();

  return (
    <div className="kpis-form">
      {radios.map((radio, radioIdx) => (
        <RadioField
          key={radioIdx}
          id={radioIdx}
          label={radio}
          checked={Math.random() > 0.5}
          onChange={() => {}}
        />
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
