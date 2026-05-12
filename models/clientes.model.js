const supabase = require('../config/supabase');
const crypto = require('crypto');

module.exports.GuardarCliente = async (datosCliente, archivos) => {
    try {
        // Guardar cliente en tabla cliente
        const { data: cliente, error: errorCliente } = await supabase
            .from('cliente')
            .insert([{
                nombrerazonsocial: datosCliente.nombre,
                tipocliente: datosCliente.tipoCliente,
                rfc: datosCliente.rfc,
                curp: datosCliente.curp || null,
                estatuscliente: datosCliente.estatusCliente,
                nombrecontactoprincipal: datosCliente.contactoPrincipal,
                telefono: datosCliente.telefono,
                correoelectronico: datosCliente.correo,
                callenumero: datosCliente.calle,
                colonia: datosCliente.colonia,
                ciudad: datosCliente.ciudad,
                estado: datosCliente.estado,
                codigopostal: datosCliente.codigoPostal,
                nivelriesgo: datosCliente.nivelRiesgo,
                espep: datosCliente.esPEP === 'Sí' ? true : false,
                limiteoperativoautorizado: parseFloat(datosCliente.limiteOperativo),
                observaciones: datosCliente.observaciones || null
            }])
            .select();

        if (errorCliente) {
            throw new Error(`Error al guardar cliente: ${errorCliente.message}`);
        }

        const idCliente = cliente[0].idcliente;

        // Guardar documentos
        if (archivos && Object.keys(archivos).length > 0) {
            for (const [tipoDoc, archivo] of Object.entries(archivos)) {
                if (archivo && archivo.size > 0) {
                    const nombreArchivo = archivo.name;
                    const hash = crypto.createHash('sha256').update(archivo.data).digest('hex');

                    const { error: errorDoc } = await supabase
                        .from('documentoCliente')
                        .insert([{
                         idcliente: idCliente,
                         tipodocumento: tipoDoc,
                         nombrearchivo: nombreArchivo,
                        rutaarchivo: `/uploads/${tipoDoc}/${nombreArchivo}`,
                            hashdocumento: hash
                     }]);

                    if (errorDoc) {
                        console.error(`Error guardando documento ${tipoDoc}:`, errorDoc);
                    }
                }
            }
        }

        return { 
            exito: true, 
            idCliente: idCliente,
            mensaje: 'Cliente y documentos guardados correctamente'
        };

    } catch (error) {
        return { 
            exito: false, 
            error: error.message 
        };
    }
};