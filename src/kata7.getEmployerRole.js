const getEmployerRole = (employeeName, employees) => {
const team = employees.filter(team => team.name === employeeName)
const roleInCompany = team[0];

return roleInCompany.role;
};
module.exports = getEmployerRole;
