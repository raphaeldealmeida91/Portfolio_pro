export const BoxCenter = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  minHeight: { xs: "50px", md: "150px" },
  textAlign: "center",
};

export const BoxRowParentSkills = {
  display: "flex",
  width: "100%",
  justifyContent: { xs: "none", md: "space-evenly" },
  flexDirection: { xs: "column", md: "row" },
  gap: 3,
  mt: 3,
};

export const BoxParentSkills = {
  display: "flex",
  flexWrap: "wrap",
  gap: 1,
  width: { xs: 300, md: 340 },
  justifyContent: "center",
};

export const BoxChildrenSkills = {
  backgroundColor: "#F2F2F2",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
  borderRadius: "4px",
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
};
