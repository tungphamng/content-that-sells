/** Custom field IDs — đồng bộ với docs/dang-ky-cmvolq1j.html (xuất từ ERP). */
export const SBO_CUSTOM_FIELD_IDS = {
  businessIndustry: "f5e32360-2c8c-4f09-b9c1-afac8ec187d7",
  teamSize: "e9325579-2e1b-4fe0-96bd-c6f9f3869718",
  monthlyRevenue: "6ef108e7-b86e-46f1-97c1-54f85728e0c6",
  problemToSolve: "ca50196c-53d5-4752-bdf8-957cbd04cd64",
} as const;

export const SBO_TEAM_SIZE_OPTIONS = [
  "1 mình tôi",
  "Dưới 5 người",
  "Từ 5-10 người",
  "Trên 10 người",
] as const;

export const SBO_MONTHLY_REVENUE_OPTIONS = [
  "Dưới 20 triệu",
  "Từ 20-50 triệu",
  "Từ 50-100 triệu",
  "Trên 100 triệu",
] as const;

export function buildSboCustomData(fields: {
  businessIndustry: string;
  teamSize: string;
  monthlyRevenue: string;
  problemToSolve: string;
}): Record<string, string> {
  return {
    [SBO_CUSTOM_FIELD_IDS.businessIndustry]: fields.businessIndustry.trim(),
    [SBO_CUSTOM_FIELD_IDS.teamSize]: fields.teamSize,
    [SBO_CUSTOM_FIELD_IDS.monthlyRevenue]: fields.monthlyRevenue,
    [SBO_CUSTOM_FIELD_IDS.problemToSolve]: fields.problemToSolve.trim(),
  };
}
