import Select from '../../../../components/common/Select/Select';
import NewSelect from '../../../../components/common/Inputs/Select';
import Chip from '../../../../components/common/Chip/Chip';
import { useKPIsData } from '../../state/hooks/useKPIsData';

const KPIsForm = () => {
  const { kpis, selectedKPIs, kpisTags, updateSelectedKPI } = useKPIsData();

  return (
    <div className="kpis-form">
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
