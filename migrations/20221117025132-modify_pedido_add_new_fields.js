
'use strict';
module.exports = {
  up(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn(
        'pedidos', // creando nueva columna "enviados" tipo BOOLEAN con defaultvalue "false"
        'enviados',
        {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      ),
    ]);
  },

  down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn('pedidos', 'enviados'),
    ]);
  },
};