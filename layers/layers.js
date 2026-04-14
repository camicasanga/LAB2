var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_25_BARRIOS_1 = new ol.format.GeoJSON();
var features_25_BARRIOS_1 = format_25_BARRIOS_1.readFeatures(json_25_BARRIOS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_25_BARRIOS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_25_BARRIOS_1.addFeatures(features_25_BARRIOS_1);
var lyr_25_BARRIOS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_25_BARRIOS_1, 
                style: style_25_BARRIOS_1,
                popuplayertitle: '25 _BARRIOS',
                interactive: true,
                title: '<img src="styles/legend/25_BARRIOS_1.png" /> 25 _BARRIOS'
            });
var format_LUGARES_2 = new ol.format.GeoJSON();
var features_LUGARES_2 = format_LUGARES_2.readFeatures(json_LUGARES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUGARES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUGARES_2.addFeatures(features_LUGARES_2);
var lyr_LUGARES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUGARES_2, 
                style: style_LUGARES_2,
                popuplayertitle: 'LUGARES',
                interactive: true,
    title: 'LUGARES<br />\
    <img src="styles/legend/LUGARES_2_0.png" /> Cafetería Candyuwu<br />\
    <img src="styles/legend/LUGARES_2_1.png" /> Caleta Alto del Rey<br />\
    <img src="styles/legend/LUGARES_2_2.png" /> Cancha De Los Huertos Familiares<br />\
    <img src="styles/legend/LUGARES_2_3.png" /> Cerro Amarillo<br />\
    <img src="styles/legend/LUGARES_2_4.png" /> Estadio Municipal de Tomé Juan Rogelio Núñez Rodríguez<br />\
    <img src="styles/legend/LUGARES_2_5.png" /> Estadio Municipal Ester Roa Rebolledo<br />\
    <img src="styles/legend/LUGARES_2_6.png" /> Humedal Urbano Bayona del Valle<br />\
    <img src="styles/legend/LUGARES_2_7.png" /> Humedal Urbano Denavi Sur<br />\
    <img src="styles/legend/LUGARES_2_8.png" /> Iglesia de Jesucristo de los Santos de los Últimos Días<br />\
    <img src="styles/legend/LUGARES_2_9.png" /> Karuna Cat Café<br />\
    <img src="styles/legend/LUGARES_2_10.png" /> Miloca Pizzeria & Restobar<br />\
    <img src="styles/legend/LUGARES_2_11.png" /> Mirador Caupolicán<br />\
    <img src="styles/legend/LUGARES_2_12.png" /> Mirador Cerro Manquimávida<br />\
    <img src="styles/legend/LUGARES_2_13.png" /> Monumento Nacional Sitio de Memoria Fuerte El Morro Talcahuano<br />\
    <img src="styles/legend/LUGARES_2_14.png" /> Parque Isidora Cousiño<br />\
    <img src="styles/legend/LUGARES_2_15.png" /> Paseo en gondola, Penco 298<br />\
    <img src="styles/legend/LUGARES_2_16.png" /> Plaza Carlos Condell<br />\
    <img src="styles/legend/LUGARES_2_17.png" /> Plaza cascada de Villuco<br />\
    <img src="styles/legend/LUGARES_2_18.png" /> Plaza de la Independencia de Concepción<br />\
    <img src="styles/legend/LUGARES_2_19.png" /> Plaza España<br />\
    <img src="styles/legend/LUGARES_2_20.png" /> Sala de Artes Escénicas de Chiguayante<br />' });
var format_TURISMO_POLIGONOS_3 = new ol.format.GeoJSON();
var features_TURISMO_POLIGONOS_3 = format_TURISMO_POLIGONOS_3.readFeatures(json_TURISMO_POLIGONOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TURISMO_POLIGONOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TURISMO_POLIGONOS_3.addFeatures(features_TURISMO_POLIGONOS_3);
var lyr_TURISMO_POLIGONOS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TURISMO_POLIGONOS_3, 
                style: style_TURISMO_POLIGONOS_3,
                popuplayertitle: 'TURISMO_POLIGONOS',
                interactive: true,
    title: 'TURISMO_POLIGONOS<br />\
    <img src="styles/legend/TURISMO_POLIGONOS_3_0.png" /> Laguna Las Tres Pascualas<br />\
    <img src="styles/legend/TURISMO_POLIGONOS_3_1.png" /> Laguna Lo Méndez<br />\
    <img src="styles/legend/TURISMO_POLIGONOS_3_2.png" /> Parque Laguna Redonda<br />\
    <img src="styles/legend/TURISMO_POLIGONOS_3_3.png" /> Universidad de Concepción<br />' });

lyr_ESRITopo_0.setVisible(true);lyr_25_BARRIOS_1.setVisible(true);lyr_LUGARES_2.setVisible(true);lyr_TURISMO_POLIGONOS_3.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_25_BARRIOS_1,lyr_LUGARES_2,lyr_TURISMO_POLIGONOS_3];
lyr_25_BARRIOS_1.set('fieldAliases', {'Id': 'Id', 'Nombre': 'Nombre', 'Area': 'Area', 'hab_m2': 'hab_m2', 'Sum_Poblac': 'Sum_Poblac', 'av_hab': 'av_hab', 'Long_tLic': 'Long_tLic', 'Long_tNLic': 'Long_tNLic', 'Suma_Trans': 'Suma_Trans', 'porc_cober': 'porc_cober', 'Distance': 'Distance', 'LongcicloK': 'LongcicloK', 'Long_rvial': 'Long_rvial', });
lyr_LUGARES_2.set('fieldAliases', {'id': 'id', 'Lugar': 'Lugar', 'Actividad': 'Actividad', 'X': 'X', 'Y': 'Y', 'Barrio': 'Barrio', 'Comuna': 'Comuna', 'Video': 'Video', });
lyr_TURISMO_POLIGONOS_3.set('fieldAliases', {'id': 'id', 'Lugar': 'Lugar', 'Barrio': 'Barrio', 'Actividad': 'Actividad', 'X': 'X', 'Y': 'Y', });
lyr_25_BARRIOS_1.set('fieldImages', {'Id': 'Range', 'Nombre': 'TextEdit', 'Area': 'TextEdit', 'hab_m2': 'TextEdit', 'Sum_Poblac': 'Range', 'av_hab': 'TextEdit', 'Long_tLic': 'TextEdit', 'Long_tNLic': 'TextEdit', 'Suma_Trans': 'TextEdit', 'porc_cober': 'TextEdit', 'Distance': 'TextEdit', 'LongcicloK': 'TextEdit', 'Long_rvial': 'TextEdit', });
lyr_LUGARES_2.set('fieldImages', {'id': 'TextEdit', 'Lugar': 'TextEdit', 'Actividad': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Barrio': 'TextEdit', 'Comuna': 'TextEdit', 'Video': 'TextEdit', });
lyr_TURISMO_POLIGONOS_3.set('fieldImages', {'id': 'TextEdit', 'Lugar': 'TextEdit', 'Barrio': 'TextEdit', 'Actividad': 'TextEdit', 'X': 'TextEdit', 'Y': 'Range', });
lyr_25_BARRIOS_1.set('fieldLabels', {'Id': 'no label', 'Nombre': 'no label', 'Area': 'no label', 'hab_m2': 'no label', 'Sum_Poblac': 'no label', 'av_hab': 'no label', 'Long_tLic': 'no label', 'Long_tNLic': 'no label', 'Suma_Trans': 'no label', 'porc_cober': 'no label', 'Distance': 'no label', 'LongcicloK': 'no label', 'Long_rvial': 'no label', });
lyr_LUGARES_2.set('fieldLabels', {'id': 'no label', 'Lugar': 'inline label - always visible', 'Actividad': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Comuna': 'inline label - always visible', 'Video': 'inline label - always visible', });
lyr_TURISMO_POLIGONOS_3.set('fieldLabels', {'id': 'no label', 'Lugar': 'inline label - always visible', 'Barrio': 'inline label - always visible', 'Actividad': 'inline label - always visible', 'X': 'inline label - always visible', 'Y': 'inline label - always visible', });
lyr_TURISMO_POLIGONOS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});