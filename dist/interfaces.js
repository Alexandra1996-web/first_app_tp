"use strict";
var Role;
(function (Role) {
    Role[Role["Doctor"] = 0] = "Doctor";
    Role[Role["Anestesista"] = 1] = "Anestesista";
    Role[Role["Asistente"] = 2] = "Asistente";
    Role[Role["Administrativo"] = 3] = "Administrativo";
})(Role || (Role = {}));
const medico = {
    name: "Martin",
    email: "martin@test.com",
    role: Role.Doctor
};
const printStaff = (staff) => {
    console.log(staff.email);
};
printStaff(medico);
//# sourceMappingURL=interfaces.js.map