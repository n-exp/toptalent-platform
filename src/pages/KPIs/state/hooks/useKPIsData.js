import { useReducer } from "react";
import {
  ANALYTICS,
  DATA,
  DEVELOPMENT,
  FINANCE,
  MARKETING,
  SALES,
} from "../constants";

const UPDATE_KPI = "UPDATE_KPI";

const kpisReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_KPI:
      const { kpi, index } = action.payload;

      return {
        ...state,
        selectedKPIs: [
          ...state.selectedKPIs.slice(0, index),
          kpi,
          ...state.selectedKPIs.slice(index + 1),
        ],
      };

    default:
      return state;
  }
};

const salesTags = [
  "Sales Growth",
  "Sales Target",
  "Revenue",
  "Customer Churn Rate",
  "Lead Conversion Ratio",
];

const marketingTags = [
  "Customer Segmentation",
  "Web and Marketing Analytics",
  "Campaign Performance",
  "Lead Generation",
];

const financeTags = [
  "Financial Planning and Analysis",
  "Revenue Management",
  "Expense Management",
  "Cash Flow Management",
];

const developmentTags = [
  "Enterprise Grade Reporting",
  "Data Discovery",
  "Centeralized BI",
  "IT Infrastructure",
];

const dataTags = [
  "Sales Growth",
  "Sales Target",
  "Revenue",
  "Customer Churn Rate",
  "Lead Conversion Ratio",
];

const analyticsTags = ["Analysis Growth", "Analysis Target"];

const KPIsTags = {
  [SALES]: salesTags,
  [MARKETING]: marketingTags,
  [FINANCE]: financeTags,
  [DEVELOPMENT]: developmentTags,
  [DATA]: dataTags,
  [ANALYTICS]: analyticsTags,
};

const kpisItems = [SALES, MARKETING, FINANCE, DEVELOPMENT, DATA, ANALYTICS];
const initialKpisItems = kpisItems.slice(0, 5);

const KPIS = {
  [SALES]: "Sales",
  [MARKETING]: "Marketing",
  [FINANCE]: "Finance",
  [DEVELOPMENT]: "Development",
  [DATA]: "Data",
  [ANALYTICS]: "Analytics",
};

const initialKPIsState = {
  kpis: kpisItems.map((kpi) => ({
    value: kpi,
    label: KPIS[kpi],
  })),
  kpisTags: KPIsTags,
  selectedKPIs: initialKpisItems.map((initialKPI) => ({
    value: initialKPI,
    label: KPIS[initialKPI],
  })),
};

export const useKPIsData = () => {
  const [state, dispatch] = useReducer(kpisReducer, initialKPIsState);

  const updateSelectedKPI = (kpi, index) => {
    dispatch({
      type: UPDATE_KPI,
      payload: { kpi, index },
    });
  };

  return {
    ...state,

    updateSelectedKPI,
  };
};
