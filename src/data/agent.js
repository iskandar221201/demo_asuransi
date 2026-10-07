export const agent = {
  name: "Budi Santoso, S.E., AAAIJ",
  shortName: "Budi Santoso",
  company: "PT Asuransi PrimaLife Indonesia",
  brand: "PrimaLife",
  license: "AJI/2024/XXXXX",
  tagline: "Pahami Dulu, Baru Tanda Tangan",
  specialization: "Proteksi jiwa, kesehatan, dan dana pendidikan anak",
  waNumber: "628987654321",
};

export function waLink(message) {
  return `https://wa.me/${agent.waNumber}?text=${encodeURIComponent(message)}`;
}
