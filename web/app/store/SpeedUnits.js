/*
 * Copyright 2015 Anton Tananaev (anton@traccar.org)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

Ext.define('Traccar.store.SpeedUnits', {
    extend: 'Ext.data.Store',
    fields: ['key', 'name', 'factor'],

    data: [{
        key: 'kn',
        name: Strings.sharedKn,
        factor: 1
    }, {
        key: 'kmh',
        name: Strings.sharedKmh,
        factor: 1.852
    }, {
        key: 'mph',
        name: Strings.sharedMph,
        factor: 1.15078
    }],

    formatValue: function (value, unit) {
        var model;
        if (!unit) {
            unit = 'kn';
        }
        model = this.findRecord('key', unit);
        return (value * model.get('factor')).toFixed(1) + ' ' + model.get('name');
    }
});
