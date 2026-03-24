const { attendee } = require("../models");

let getAssistance = async (req, res) => {
    try {
        let attend = await attendee.findAll({
            order: [["updatedAt", "DESC"]],
        });

        if (attend.length <= 0) {
            return response.status(204).json({
                status: 204,
                message: "No se encontraron asistentes",
            });
        }
        response.status(200).json({
            message:"Lista de asistentes mostrada exitosamente",
            status:200,
            data: attend   
        })
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: "Error al obtener asistentes",
            error: error.message,
        });
    }
};

let postRegister = async (req, res) => {
    try {
        if (
            fullName === undefined ||
            email === undefined ||
            ticketType === undefined ||
            fullName === "" ||
            email === "" ||
            ticketType === ""
        ) {
            response.status(406).json({
                message: "No se recibieron datos",
                status: 406,
            });
        }
        let newAsistente = await attendee.create(request.body);
        response.status(201).json({
            message: "Asistente registrado exitosamente",
            status: 201,
            data: newAsistente,
        });
    } catch (error) {
        return response.status(500).json({
            status: 500,
            message: "Error al crear asistentes",
            error: error.message,
        });
    }
};

module.exports = {
    getAssistance,
    postRegister,
};
