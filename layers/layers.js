var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KecamatanTungkalIlir_1 = new ol.format.GeoJSON();
var features_KecamatanTungkalIlir_1 = format_KecamatanTungkalIlir_1.readFeatures(json_KecamatanTungkalIlir_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanTungkalIlir_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanTungkalIlir_1.addFeatures(features_KecamatanTungkalIlir_1);
var lyr_KecamatanTungkalIlir_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanTungkalIlir_1, 
                style: style_KecamatanTungkalIlir_1,
                interactive: true,
    title: 'Kecamatan Tungkal Ilir<br />\
    <img src="styles/legend/KecamatanTungkalIlir_1_0.png" /> Bentayan<br />\
    <img src="styles/legend/KecamatanTungkalIlir_1_1.png" /> Marga Rahayu<br />\
    <img src="styles/legend/KecamatanTungkalIlir_1_2.png" /> Suka Mulya<br />\
    <img src="styles/legend/KecamatanTungkalIlir_1_3.png" /> Suka Raja<br />\
    <img src="styles/legend/KecamatanTungkalIlir_1_4.png" /> Teluk Tenggulang<br />'
        });
var format_KecamatanTanjungLago_2 = new ol.format.GeoJSON();
var features_KecamatanTanjungLago_2 = format_KecamatanTanjungLago_2.readFeatures(json_KecamatanTanjungLago_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanTanjungLago_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanTanjungLago_2.addFeatures(features_KecamatanTanjungLago_2);
var lyr_KecamatanTanjungLago_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanTanjungLago_2, 
                style: style_KecamatanTanjungLago_2,
                interactive: true,
    title: 'Kecamatan Tanjung Lago<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_0.png" /> Bangun Sari<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_1.png" /> Banyu Urip<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_2.png" /> Bunga Karang<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_3.png" /> Kuala Puntian<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_4.png" /> Manggar Raya<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_5.png" /> Muara Sugih<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_6.png" /> Mulya Sari<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_7.png" /> Purwosari<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_8.png" /> Sebalik<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_9.png" /> Sri Menanti<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_10.png" /> Sukadamai<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_11.png" /> Sukatani<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_12.png" /> Sumber Mekar Mukti<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_13.png" /> Tanjung Lago<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_14.png" /> Telang Sari<br />\
    <img src="styles/legend/KecamatanTanjungLago_2_15.png" /> <br />'
        });
var format_KecamatanTalangKelapa_3 = new ol.format.GeoJSON();
var features_KecamatanTalangKelapa_3 = format_KecamatanTalangKelapa_3.readFeatures(json_KecamatanTalangKelapa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanTalangKelapa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanTalangKelapa_3.addFeatures(features_KecamatanTalangKelapa_3);
var lyr_KecamatanTalangKelapa_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanTalangKelapa_3, 
                style: style_KecamatanTalangKelapa_3,
                interactive: true,
    title: 'Kecamatan Talang Kelapa<br />\
    <img src="styles/legend/KecamatanTalangKelapa_3_0.png" /> Gasing<br />\
    <img src="styles/legend/KecamatanTalangKelapa_3_1.png" /> Kenten Laut<br />\
    <img src="styles/legend/KecamatanTalangKelapa_3_2.png" /> Sungai Rengat Murni<br />'
        });
var format_KecamatanSumberMargaTelang_4 = new ol.format.GeoJSON();
var features_KecamatanSumberMargaTelang_4 = format_KecamatanSumberMargaTelang_4.readFeatures(json_KecamatanSumberMargaTelang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanSumberMargaTelang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanSumberMargaTelang_4.addFeatures(features_KecamatanSumberMargaTelang_4);
var lyr_KecamatanSumberMargaTelang_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanSumberMargaTelang_4, 
                style: style_KecamatanSumberMargaTelang_4,
                interactive: true,
    title: 'Kecamatan Sumber Marga Telang<br />\
    <img src="styles/legend/KecamatanSumberMargaTelang_4_0.png" /> Karang Anyar<br />\
    <img src="styles/legend/KecamatanSumberMargaTelang_4_1.png" /> Karang Baru<br />\
    <img src="styles/legend/KecamatanSumberMargaTelang_4_2.png" /> Muara Telang<br />\
    <img src="styles/legend/KecamatanSumberMargaTelang_4_3.png" /> Muara Telang Marga<br />\
    <img src="styles/legend/KecamatanSumberMargaTelang_4_4.png" /> Sri Tiga<br />\
    <img src="styles/legend/KecamatanSumberMargaTelang_4_5.png" /> Sumber Jaya<br />\
    <img src="styles/legend/KecamatanSumberMargaTelang_4_6.png" /> Talang Lubuk<br />\
    <img src="styles/legend/KecamatanSumberMargaTelang_4_7.png" /> Terusan Dalam<br />\
    <img src="styles/legend/KecamatanSumberMargaTelang_4_8.png" /> Terusan Tengah<br />'
        });
var format_KecamatanSuakTapeh_5 = new ol.format.GeoJSON();
var features_KecamatanSuakTapeh_5 = format_KecamatanSuakTapeh_5.readFeatures(json_KecamatanSuakTapeh_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanSuakTapeh_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanSuakTapeh_5.addFeatures(features_KecamatanSuakTapeh_5);
var lyr_KecamatanSuakTapeh_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanSuakTapeh_5, 
                style: style_KecamatanSuakTapeh_5,
                interactive: true,
    title: 'Kecamatan Suak Tapeh<br />\
    <img src="styles/legend/KecamatanSuakTapeh_5_0.png" /> Lubuk Lancang<br />\
    <img src="styles/legend/KecamatanSuakTapeh_5_1.png" /> Sedang<br />\
    <img src="styles/legend/KecamatanSuakTapeh_5_2.png" /> Tanjung Laut<br />'
        });
var format_KecamatanSelatPenuguan_6 = new ol.format.GeoJSON();
var features_KecamatanSelatPenuguan_6 = format_KecamatanSelatPenuguan_6.readFeatures(json_KecamatanSelatPenuguan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanSelatPenuguan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanSelatPenuguan_6.addFeatures(features_KecamatanSelatPenuguan_6);
var lyr_KecamatanSelatPenuguan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanSelatPenuguan_6, 
                style: style_KecamatanSelatPenuguan_6,
                interactive: true,
    title: 'Kecamatan Selat Penuguan<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_0.png" /> Bumi Rejo<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_1.png" /> Karang Manunggal<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_2.png" /> Kelapa Dua<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_3.png" /> Penuguan<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_4.png" /> Purwodadi<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_5.png" /> Purwosari<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_6.png" /> Ringin Harjo<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_7.png" /> Songo Makmur<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_8.png" /> Sumber Agung<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_9.png" /> Sumber Mukti<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_10.png" /> Sumber Rejo<br />\
    <img src="styles/legend/KecamatanSelatPenuguan_6_11.png" /> Wonodadi<br />'
        });
var format_KecamatanSembawa_7 = new ol.format.GeoJSON();
var features_KecamatanSembawa_7 = format_KecamatanSembawa_7.readFeatures(json_KecamatanSembawa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanSembawa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanSembawa_7.addFeatures(features_KecamatanSembawa_7);
var lyr_KecamatanSembawa_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanSembawa_7, 
                style: style_KecamatanSembawa_7,
                interactive: true,
    title: 'Kecamatan Sembawa<br />\
    <img src="styles/legend/KecamatanSembawa_7_0.png" /> Limau<br />\
    <img src="styles/legend/KecamatanSembawa_7_1.png" /> Muara Damai<br />\
    <img src="styles/legend/KecamatanSembawa_7_2.png" /> Pulau Harapan<br />\
    <img src="styles/legend/KecamatanSembawa_7_3.png" /> Santan Sari<br />'
        });
var format_KecamatanRantauBayur_8 = new ol.format.GeoJSON();
var features_KecamatanRantauBayur_8 = format_KecamatanRantauBayur_8.readFeatures(json_KecamatanRantauBayur_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanRantauBayur_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanRantauBayur_8.addFeatures(features_KecamatanRantauBayur_8);
var lyr_KecamatanRantauBayur_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanRantauBayur_8, 
                style: style_KecamatanRantauBayur_8,
                interactive: true,
    title: 'Kecamatan Rantau Bayur<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_0.png" /> Kemang Bejalu<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_1.png" /> Lebung<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_2.png" /> Lubuk Rengas<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_3.png" /> Muara Abab<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_4.png" /> Pagar Bulan<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_5.png" /> Paldas<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_6.png" /> Penandingan<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_7.png" /> Rantau Bayur<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_8.png" /> Rantau Harapan<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_9.png" /> Sejagung<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_10.png" /> Semuntul<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_11.png" /> Srijaya<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_12.png" /> Sukarela<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_13.png" /> Sungai Lilin<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_14.png" /> Sungai Naik<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_15.png" /> Sungai Pinang<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_16.png" /> Talang Kemang<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_17.png" /> Tanjung Menang<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_18.png" /> Tanjung Pasir<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_19.png" /> Tanjung Tiga<br />\
    <img src="styles/legend/KecamatanRantauBayur_8_20.png" /> Tebing Abang<br />'
        });
var format_KecamatanRambutan_9 = new ol.format.GeoJSON();
var features_KecamatanRambutan_9 = format_KecamatanRambutan_9.readFeatures(json_KecamatanRambutan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanRambutan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanRambutan_9.addFeatures(features_KecamatanRambutan_9);
var lyr_KecamatanRambutan_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanRambutan_9, 
                style: style_KecamatanRambutan_9,
                interactive: true,
    title: 'Kecamatan Rambutan<br />\
    <img src="styles/legend/KecamatanRambutan_9_0.png" /> Durian Gadis<br />\
    <img src="styles/legend/KecamatanRambutan_9_1.png" /> Gelebak Dalam<br />\
    <img src="styles/legend/KecamatanRambutan_9_2.png" /> Jakabaring Selatan<br />\
    <img src="styles/legend/KecamatanRambutan_9_3.png" /> Menten<br />\
    <img src="styles/legend/KecamatanRambutan_9_4.png" /> Pangkalan Gelebak<br />\
    <img src="styles/legend/KecamatanRambutan_9_5.png" /> Parit<br />\
    <img src="styles/legend/KecamatanRambutan_9_6.png" /> Pelaju<br />\
    <img src="styles/legend/KecamatanRambutan_9_7.png" /> Pulau Parang<br />\
    <img src="styles/legend/KecamatanRambutan_9_8.png" /> Rambutan<br />\
    <img src="styles/legend/KecamatanRambutan_9_9.png" /> Sako<br />\
    <img src="styles/legend/KecamatanRambutan_9_10.png" /> Siju<br />\
    <img src="styles/legend/KecamatanRambutan_9_11.png" /> Sungai Dua<br />\
    <img src="styles/legend/KecamatanRambutan_9_12.png" /> Sungai Kedukan<br />\
    <img src="styles/legend/KecamatanRambutan_9_13.png" /> Sungaipinang<br />\
    <img src="styles/legend/KecamatanRambutan_9_14.png" /> Tanah Lembak<br />\
    <img src="styles/legend/KecamatanRambutan_9_15.png" /> Tanjung Kerang<br />\
    <img src="styles/legend/KecamatanRambutan_9_16.png" /> Tanjung Merbu<br />'
        });
var format_KecamatanPulauRimau_10 = new ol.format.GeoJSON();
var features_KecamatanPulauRimau_10 = format_KecamatanPulauRimau_10.readFeatures(json_KecamatanPulauRimau_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanPulauRimau_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanPulauRimau_10.addFeatures(features_KecamatanPulauRimau_10);
var lyr_KecamatanPulauRimau_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanPulauRimau_10, 
                style: style_KecamatanPulauRimau_10,
                interactive: true,
    title: 'Kecamatan Pulau Rimau<br />\
    <img src="styles/legend/KecamatanPulauRimau_10_0.png" /> Budi Asih<br />\
    <img src="styles/legend/KecamatanPulauRimau_10_1.png" /> Dana Mulya<br />\
    <img src="styles/legend/KecamatanPulauRimau_10_2.png" /> Mukut<br />\
    <img src="styles/legend/KecamatanPulauRimau_10_3.png" /> Nunggal Sari<br />\
    <img src="styles/legend/KecamatanPulauRimau_10_4.png" /> Rawa Banda<br />\
    <img src="styles/legend/KecamatanPulauRimau_10_5.png" /> Rukun Makmur<br />\
    <img src="styles/legend/KecamatanPulauRimau_10_6.png" /> Teluk Betung<br />\
    <img src="styles/legend/KecamatanPulauRimau_10_7.png" /> Wonosari<br />'
        });
var format_KecamatanMuaraTelang_11 = new ol.format.GeoJSON();
var features_KecamatanMuaraTelang_11 = format_KecamatanMuaraTelang_11.readFeatures(json_KecamatanMuaraTelang_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanMuaraTelang_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanMuaraTelang_11.addFeatures(features_KecamatanMuaraTelang_11);
var lyr_KecamatanMuaraTelang_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanMuaraTelang_11, 
                style: style_KecamatanMuaraTelang_11,
                interactive: true,
    title: 'Kecamatan Muara Telang<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_0.png" /> Marga Rahayu<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_1.png" /> Mekar Mukti<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_2.png" /> Mekar Sari<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_3.png" /> Mukti Jaya<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_4.png" /> Panca Mukti<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_5.png" /> Sumber Hidup<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_6.png" /> Sumber Mulya<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_7.png" /> Talang Indah<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_8.png" /> Telang Jaya<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_9.png" /> Telang Karya<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_10.png" /> Telang Makmur<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_11.png" /> Telang Rejo<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_12.png" /> Upang Cemara<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_13.png" /> Upang Ceria<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_14.png" /> Upang Jaya<br />\
    <img src="styles/legend/KecamatanMuaraTelang_11_15.png" /> Upang Karya<br />'
        });
var format_KecamatanMuaraSugihan_12 = new ol.format.GeoJSON();
var features_KecamatanMuaraSugihan_12 = format_KecamatanMuaraSugihan_12.readFeatures(json_KecamatanMuaraSugihan_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanMuaraSugihan_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanMuaraSugihan_12.addFeatures(features_KecamatanMuaraSugihan_12);
var lyr_KecamatanMuaraSugihan_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanMuaraSugihan_12, 
                style: style_KecamatanMuaraSugihan_12,
                interactive: true,
    title: 'Kecamatan Muara Sugihan<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_0.png" /> Argo Mulyo<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_1.png" /> Beringin Agung<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_2.png" /> Cendana<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_3.png" /> Daya Bangun Harjo<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_4.png" /> Daya Kesuma<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_5.png" /> Daya Murni<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_6.png" /> Ganesha Mukti<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_7.png" /> Gilirang<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_8.png" /> Indrapura<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_9.png" /> Jalur Mulya<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_10.png" /> Juru Taro<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_11.png" /> Margo Mulyo 16<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_12.png" /> Margo Rukun<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_13.png" /> Mekar Jaya<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_14.png" /> Rejo Sari<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_15.png" /> Sido Makmur<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_16.png" /> Sugih Waras<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_17.png" /> Sumber Mulyo<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_18.png" /> Timbul Jaya<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_19.png" /> Tirta Harja<br />\
    <img src="styles/legend/KecamatanMuaraSugihan_12_20.png" /> Tirta Mulya<br />'
        });
var format_KecamatanMuaraPadang_13 = new ol.format.GeoJSON();
var features_KecamatanMuaraPadang_13 = format_KecamatanMuaraPadang_13.readFeatures(json_KecamatanMuaraPadang_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanMuaraPadang_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanMuaraPadang_13.addFeatures(features_KecamatanMuaraPadang_13);
var lyr_KecamatanMuaraPadang_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanMuaraPadang_13, 
                style: style_KecamatanMuaraPadang_13,
                interactive: true,
    title: 'Kecamatan Muara Padang<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_0.png" /> Air Gading<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_1.png" /> Daya Makmur<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_2.png" /> Daya Utama<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_3.png" /> Karang Anyar<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_4.png" /> Margo Mulyo 16<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_5.png" /> Margo Mulyo 20<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_6.png" /> Margo Sugihan<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_7.png" /> Muara Padang<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_8.png" /> Purwodadi<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_9.png" /> Sido Mulyo 18<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_10.png" /> Sido Mulyo 20<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_11.png" /> Sido Rejo<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_12.png" /> Sumber Makmur<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_13.png" /> Tanjung Baru<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_14.png" /> Tirta Jaya<br />\
    <img src="styles/legend/KecamatanMuaraPadang_13_15.png" /> Tirto Raharjo<br />'
        });
var format_KecamatanMakartiJaya_14 = new ol.format.GeoJSON();
var features_KecamatanMakartiJaya_14 = format_KecamatanMakartiJaya_14.readFeatures(json_KecamatanMakartiJaya_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanMakartiJaya_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanMakartiJaya_14.addFeatures(features_KecamatanMakartiJaya_14);
var lyr_KecamatanMakartiJaya_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanMakartiJaya_14, 
                style: style_KecamatanMakartiJaya_14,
                interactive: true,
    title: 'Kecamatan Makarti Jaya<br />\
    <img src="styles/legend/KecamatanMakartiJaya_14_0.png" /> Delta Upang<br />\
    <img src="styles/legend/KecamatanMakartiJaya_14_1.png" /> Makarti Jaya<br />\
    <img src="styles/legend/KecamatanMakartiJaya_14_2.png" /> Muara Baru<br />\
    <img src="styles/legend/KecamatanMakartiJaya_14_3.png" /> Pendowo Harjo<br />\
    <img src="styles/legend/KecamatanMakartiJaya_14_4.png" /> Sungai Semut<br />\
    <img src="styles/legend/KecamatanMakartiJaya_14_5.png" /> Tanjung Baru<br />\
    <img src="styles/legend/KecamatanMakartiJaya_14_6.png" /> Tanjung Mas<br />\
    <img src="styles/legend/KecamatanMakartiJaya_14_7.png" /> Tirta Kencana<br />\
    <img src="styles/legend/KecamatanMakartiJaya_14_8.png" /> Upang Makmur<br />\
    <img src="styles/legend/KecamatanMakartiJaya_14_9.png" /> Upang Mulya<br />'
        });
var format_KecamatanKarangAgungIlir_15 = new ol.format.GeoJSON();
var features_KecamatanKarangAgungIlir_15 = format_KecamatanKarangAgungIlir_15.readFeatures(json_KecamatanKarangAgungIlir_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanKarangAgungIlir_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanKarangAgungIlir_15.addFeatures(features_KecamatanKarangAgungIlir_15);
var lyr_KecamatanKarangAgungIlir_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanKarangAgungIlir_15, 
                style: style_KecamatanKarangAgungIlir_15,
                interactive: true,
    title: 'Kecamatan Karang Agung Ilir<br />\
    <img src="styles/legend/KecamatanKarangAgungIlir_15_0.png" /> Jati Sari<br />\
    <img src="styles/legend/KecamatanKarangAgungIlir_15_1.png" /> Karang Sari<br />\
    <img src="styles/legend/KecamatanKarangAgungIlir_15_2.png" /> Maju Ria<br />\
    <img src="styles/legend/KecamatanKarangAgungIlir_15_3.png" /> Mekar Sari<br />\
    <img src="styles/legend/KecamatanKarangAgungIlir_15_4.png" /> Sri Agung<br />\
    <img src="styles/legend/KecamatanKarangAgungIlir_15_5.png" /> Sumber Rejeki<br />\
    <img src="styles/legend/KecamatanKarangAgungIlir_15_6.png" /> Tabala Jaya<br />'
        });
var format_KecamatanBanyuasinIII_16 = new ol.format.GeoJSON();
var features_KecamatanBanyuasinIII_16 = format_KecamatanBanyuasinIII_16.readFeatures(json_KecamatanBanyuasinIII_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanBanyuasinIII_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanBanyuasinIII_16.addFeatures(features_KecamatanBanyuasinIII_16);
var lyr_KecamatanBanyuasinIII_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanBanyuasinIII_16, 
                style: style_KecamatanBanyuasinIII_16,
                interactive: true,
    title: 'Kecamatan Banyuasin III<br />\
    <img src="styles/legend/KecamatanBanyuasinIII_16_0.png" /> Langkan<br />\
    <img src="styles/legend/KecamatanBanyuasinIII_16_1.png" /> Pangkalan Balai<br />\
    <img src="styles/legend/KecamatanBanyuasinIII_16_2.png" /> Rimba Balai<br />\
    <img src="styles/legend/KecamatanBanyuasinIII_16_3.png" /> Seterio<br />\
    <img src="styles/legend/KecamatanBanyuasinIII_16_4.png" /> Sidang Mas<br />\
    <img src="styles/legend/KecamatanBanyuasinIII_16_5.png" /> Terlangu<br />\
    <img src="styles/legend/KecamatanBanyuasinIII_16_6.png" /> Ujung Tanjung<br />'
        });
var format_KecamatanBanyuasinII_17 = new ol.format.GeoJSON();
var features_KecamatanBanyuasinII_17 = format_KecamatanBanyuasinII_17.readFeatures(json_KecamatanBanyuasinII_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanBanyuasinII_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanBanyuasinII_17.addFeatures(features_KecamatanBanyuasinII_17);
var lyr_KecamatanBanyuasinII_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanBanyuasinII_17, 
                style: style_KecamatanBanyuasinII_17,
                interactive: true,
    title: 'Kecamatan Banyuasin II<br />\
    <img src="styles/legend/KecamatanBanyuasinII_17_0.png" /> Muara Sungsang<br />\
    <img src="styles/legend/KecamatanBanyuasinII_17_1.png" /> Perajen Jaya<br />\
    <img src="styles/legend/KecamatanBanyuasinII_17_2.png" /> Rimau Sungsang<br />\
    <img src="styles/legend/KecamatanBanyuasinII_17_3.png" /> Sungsang I<br />\
    <img src="styles/legend/KecamatanBanyuasinII_17_4.png" /> Sungsang II<br />\
    <img src="styles/legend/KecamatanBanyuasinII_17_5.png" /> Sungsang IV<br />\
    <img src="styles/legend/KecamatanBanyuasinII_17_6.png" /> Teluk Payo<br />'
        });
var format_KecamatanBanyuasinI_18 = new ol.format.GeoJSON();
var features_KecamatanBanyuasinI_18 = format_KecamatanBanyuasinI_18.readFeatures(json_KecamatanBanyuasinI_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanBanyuasinI_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanBanyuasinI_18.addFeatures(features_KecamatanBanyuasinI_18);
var lyr_KecamatanBanyuasinI_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanBanyuasinI_18, 
                style: style_KecamatanBanyuasinI_18,
                interactive: true,
    title: 'Kecamatan Banyuasin I<br />\
    <img src="styles/legend/KecamatanBanyuasinI_18_0.png" /> Cinta Manis Lama<br />\
    <img src="styles/legend/KecamatanBanyuasinI_18_1.png" /> Mariana<br />\
    <img src="styles/legend/KecamatanBanyuasinI_18_2.png" /> Mariana Ilir<br />\
    <img src="styles/legend/KecamatanBanyuasinI_18_3.png" /> Merah Mata<br />\
    <img src="styles/legend/KecamatanBanyuasinI_18_4.png" /> Pematang Palas<br />\
    <img src="styles/legend/KecamatanBanyuasinI_18_5.png" /> Perajen<br />\
    <img src="styles/legend/KecamatanBanyuasinI_18_6.png" /> Perambahan<br />\
    <img src="styles/legend/KecamatanBanyuasinI_18_7.png" /> Pulauborang<br />\
    <img src="styles/legend/KecamatanBanyuasinI_18_8.png" /> Sungai Gerong<br />\
    <img src="styles/legend/KecamatanBanyuasinI_18_9.png" /> Sungai Rebo<br />'
        });
var format_KecamatanAirKumbang_19 = new ol.format.GeoJSON();
var features_KecamatanAirKumbang_19 = format_KecamatanAirKumbang_19.readFeatures(json_KecamatanAirKumbang_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanAirKumbang_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanAirKumbang_19.addFeatures(features_KecamatanAirKumbang_19);
var lyr_KecamatanAirKumbang_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanAirKumbang_19, 
                style: style_KecamatanAirKumbang_19,
                interactive: true,
    title: 'Kecamatan Air Kumbang<br />\
    <img src="styles/legend/KecamatanAirKumbang_19_0.png" /> Air Kumbang Bakti<br />\
    <img src="styles/legend/KecamatanAirKumbang_19_1.png" /> Budi Mulya<br />\
    <img src="styles/legend/KecamatanAirKumbang_19_2.png" /> Muara Baru<br />\
    <img src="styles/legend/KecamatanAirKumbang_19_3.png" /> Padang Rejo<br />\
    <img src="styles/legend/KecamatanAirKumbang_19_4.png" /> Panca Mulya<br />\
    <img src="styles/legend/KecamatanAirKumbang_19_5.png" /> Sebubus<br />\
    <img src="styles/legend/KecamatanAirKumbang_19_6.png" /> Teluk Tenggirik<br />\
    <img src="styles/legend/KecamatanAirKumbang_19_7.png" /> Tirta Makmur<br />'
        });
var format_KecamatanAirSalek_20 = new ol.format.GeoJSON();
var features_KecamatanAirSalek_20 = format_KecamatanAirSalek_20.readFeatures(json_KecamatanAirSalek_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecamatanAirSalek_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecamatanAirSalek_20.addFeatures(features_KecamatanAirSalek_20);
var lyr_KecamatanAirSalek_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KecamatanAirSalek_20, 
                style: style_KecamatanAirSalek_20,
                interactive: true,
    title: 'Kecamatan Air Salek<br />\
    <img src="styles/legend/KecamatanAirSalek_20_0.png" /> Air Solok Batu<br />\
    <img src="styles/legend/KecamatanAirSalek_20_1.png" /> Bintaran<br />\
    <img src="styles/legend/KecamatanAirSalek_20_2.png" /> Damar Wulan<br />\
    <img src="styles/legend/KecamatanAirSalek_20_3.png" /> Enggal Rejo<br />\
    <img src="styles/legend/KecamatanAirSalek_20_4.png" /> Saleh Agung<br />\
    <img src="styles/legend/KecamatanAirSalek_20_5.png" /> Saleh Jaya<br />\
    <img src="styles/legend/KecamatanAirSalek_20_6.png" /> Saleh Makmur<br />\
    <img src="styles/legend/KecamatanAirSalek_20_7.png" /> Saleh Mukti<br />\
    <img src="styles/legend/KecamatanAirSalek_20_8.png" /> Saleh Mulya<br />\
    <img src="styles/legend/KecamatanAirSalek_20_9.png" /> Sidoharjo<br />\
    <img src="styles/legend/KecamatanAirSalek_20_10.png" /> Sri Mulyo<br />\
    <img src="styles/legend/KecamatanAirSalek_20_11.png" /> Srikaton<br />\
    <img src="styles/legend/KecamatanAirSalek_20_12.png" /> Upang<br />\
    <img src="styles/legend/KecamatanAirSalek_20_13.png" /> Upang Marga<br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_KecamatanTungkalIlir_1.setVisible(true);lyr_KecamatanTanjungLago_2.setVisible(true);lyr_KecamatanTalangKelapa_3.setVisible(true);lyr_KecamatanSumberMargaTelang_4.setVisible(true);lyr_KecamatanSuakTapeh_5.setVisible(true);lyr_KecamatanSelatPenuguan_6.setVisible(true);lyr_KecamatanSembawa_7.setVisible(true);lyr_KecamatanRantauBayur_8.setVisible(true);lyr_KecamatanRambutan_9.setVisible(true);lyr_KecamatanPulauRimau_10.setVisible(true);lyr_KecamatanMuaraTelang_11.setVisible(true);lyr_KecamatanMuaraSugihan_12.setVisible(true);lyr_KecamatanMuaraPadang_13.setVisible(true);lyr_KecamatanMakartiJaya_14.setVisible(true);lyr_KecamatanKarangAgungIlir_15.setVisible(true);lyr_KecamatanBanyuasinIII_16.setVisible(true);lyr_KecamatanBanyuasinII_17.setVisible(true);lyr_KecamatanBanyuasinI_18.setVisible(true);lyr_KecamatanAirKumbang_19.setVisible(true);lyr_KecamatanAirSalek_20.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KecamatanTungkalIlir_1,lyr_KecamatanTanjungLago_2,lyr_KecamatanTalangKelapa_3,lyr_KecamatanSumberMargaTelang_4,lyr_KecamatanSuakTapeh_5,lyr_KecamatanSelatPenuguan_6,lyr_KecamatanSembawa_7,lyr_KecamatanRantauBayur_8,lyr_KecamatanRambutan_9,lyr_KecamatanPulauRimau_10,lyr_KecamatanMuaraTelang_11,lyr_KecamatanMuaraSugihan_12,lyr_KecamatanMuaraPadang_13,lyr_KecamatanMakartiJaya_14,lyr_KecamatanKarangAgungIlir_15,lyr_KecamatanBanyuasinIII_16,lyr_KecamatanBanyuasinII_17,lyr_KecamatanBanyuasinI_18,lyr_KecamatanAirKumbang_19,lyr_KecamatanAirSalek_20];
lyr_KecamatanTungkalIlir_1.set('fieldAliases', {'fid': 'fid', 'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'TI_Kecamatan': 'TI_Kecamatan', 'TI_Jumlah Poktan': 'TI_Jumlah Poktan', 'TI_Luas Lahan': 'TI_Luas Lahan', 'TI_IP': 'TI_IP', 'TI_Komoditi': 'TI_Komoditi', 'TI_TR2': 'TI_TR2', 'TI_TR4': 'TI_TR4', 'TI_CHB': 'TI_CHB', 'TI_POMPA AIR': 'TI_POMPA AIR', 'TI_TANGGUL': 'TI_TANGGUL', 'TI_SALURAN': 'TI_SALURAN', 'TI_JUT': 'TI_JUT', });
lyr_KecamatanTanjungLago_2.set('fieldAliases', {'fid': 'fid', 'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'TL_Kecamatan': 'TL_Kecamatan', 'TL_Jumlah Poktan': 'TL_Jumlah Poktan', 'TL_Luas Lahan': 'TL_Luas Lahan', 'TL_IP': 'TL_IP', 'TL_Komoditi': 'TL_Komoditi', 'TL_TR2': 'TL_TR2', 'TL_TR4': 'TL_TR4', 'TL_CHB': 'TL_CHB', 'TL_POMPA AIR': 'TL_POMPA AIR', 'TL_TANGGUL': 'TL_TANGGUL', 'TL_SALURAN': 'TL_SALURAN', 'TL_JUT': 'TL_JUT', });
lyr_KecamatanTalangKelapa_3.set('fieldAliases', {'fid': 'fid', 'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'TK_Kecamatan': 'TK_Kecamatan', 'TK_Jumlah Poktan': 'TK_Jumlah Poktan', 'TK_Luas Lahan': 'TK_Luas Lahan', 'TK_IP': 'TK_IP', 'TK_Komoditi': 'TK_Komoditi', 'TK_TR2': 'TK_TR2', 'TK_TR4': 'TK_TR4', 'TK_CHB': 'TK_CHB', 'TK_POMPA AIR': 'TK_POMPA AIR', 'TK_TANGGUL': 'TK_TANGGUL', 'TK_SALURAN': 'TK_SALURAN', 'TK_JUT': 'TK_JUT', });
lyr_KecamatanSumberMargaTelang_4.set('fieldAliases', {'fid': 'fid', 'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SMT_Kecamatan': 'SMT_Kecamatan', 'SMT_Jumlah Poktan': 'SMT_Jumlah Poktan', 'SMT_Luas Lahan': 'SMT_Luas Lahan', 'SMT_IP': 'SMT_IP', 'SMT_Komoditi': 'SMT_Komoditi', 'SMT_TR2': 'SMT_TR2', 'SMT_TR4': 'SMT_TR4', 'SMT_CHB': 'SMT_CHB', 'SMT_POMPA AIR': 'SMT_POMPA AIR', 'SMT_TANGGUL': 'SMT_TANGGUL', 'SMT_SALURAN': 'SMT_SALURAN', 'SMT_JUT': 'SMT_JUT', });
lyr_KecamatanSuakTapeh_5.set('fieldAliases', {'fid': 'fid', 'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ST_Kecamatan': 'ST_Kecamatan', 'ST_Jumlah Poktan': 'ST_Jumlah Poktan', 'ST_Luas Lahan': 'ST_Luas Lahan', 'ST_IP': 'ST_IP', 'ST_Komoditi': 'ST_Komoditi', 'ST_TR2': 'ST_TR2', 'ST_TR4': 'ST_TR4', 'ST_CHB': 'ST_CHB', 'ST_POMPA AIR': 'ST_POMPA AIR', 'ST_TANGGUL': 'ST_TANGGUL', 'ST_SALURAN': 'ST_SALURAN', 'ST_JUT': 'ST_JUT', });
lyr_KecamatanSelatPenuguan_6.set('fieldAliases', {'fid': 'fid', 'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SP_Kecamatan': 'SP_Kecamatan', 'SP_Jumlah Poktan': 'SP_Jumlah Poktan', 'SP_Luas Lahan': 'SP_Luas Lahan', 'SP_IP': 'SP_IP', 'SP_Komoditi': 'SP_Komoditi', 'SP_TR2': 'SP_TR2', 'SP_TR4': 'SP_TR4', 'SP_CHB': 'SP_CHB', 'SP_POMPA AIR': 'SP_POMPA AIR', 'SP_TANGGUL': 'SP_TANGGUL', 'SP_SALURAN': 'SP_SALURAN', 'SP_JUT': 'SP_JUT', });
lyr_KecamatanSembawa_7.set('fieldAliases', {'fid': 'fid', 'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'SE_Kecamatan': 'SE_Kecamatan', 'SE_Jumlah Poktan': 'SE_Jumlah Poktan', 'SE_Luas Lahan': 'SE_Luas Lahan', 'SE_IP': 'SE_IP', 'SE_Komoditi': 'SE_Komoditi', 'SE_TR2': 'SE_TR2', 'SE_TR4': 'SE_TR4', 'SE_CHB': 'SE_CHB', 'SE_POMPA AIR': 'SE_POMPA AIR', 'SE_TANGGUL': 'SE_TANGGUL', 'SE_SALURAN': 'SE_SALURAN', 'SE_JUT': 'SE_JUT', });
lyr_KecamatanRantauBayur_8.set('fieldAliases', {'fid': 'fid', 'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'RB_Kecamatan': 'RB_Kecamatan', 'RB_Jumlah Poktan': 'RB_Jumlah Poktan', 'RB_Luas Lahan': 'RB_Luas Lahan', 'RB_IP': 'RB_IP', 'RB_Komoditi': 'RB_Komoditi', 'RB_TR2': 'RB_TR2', 'RB_TR4': 'RB_TR4', 'RB_CHB': 'RB_CHB', 'RB_POMPA AIR': 'RB_POMPA AIR', 'RB_TANGGUL': 'RB_TANGGUL', 'RB_SALURAN': 'RB_SALURAN', 'RB_JUT': 'RB_JUT', });
lyr_KecamatanRambutan_9.set('fieldAliases', {'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'RA_Kecamatan': 'RA_Kecamatan', 'RA_Jumlah Poktan': 'RA_Jumlah Poktan', 'RA_Luas Lahan': 'RA_Luas Lahan', 'RA_IP': 'RA_IP', 'RA_Komoditi': 'RA_Komoditi', 'RA_TR2': 'RA_TR2', 'RA_TR4': 'RA_TR4', 'RA_CHB': 'RA_CHB', 'RA_POMPA AIR': 'RA_POMPA AIR', 'RA_TANGGUL': 'RA_TANGGUL', 'RA_SALURAN': 'RA_SALURAN', 'RA_JUT': 'RA_JUT', });
lyr_KecamatanPulauRimau_10.set('fieldAliases', {'fid': 'fid', 'TIPE_RAWA': 'TIPE_RAWA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NAMOBJ': 'NAMOBJ', 'PR_Kecamatan': 'PR_Kecamatan', 'PR_Jumlah Poktan': 'PR_Jumlah Poktan', 'PR_Luas Lahan': 'PR_Luas Lahan', 'PR_IP': 'PR_IP', 'PR_Komoditi': 'PR_Komoditi', 'PR_TR2': 'PR_TR2', 'PR_TR4': 'PR_TR4', 'PR_CHB': 'PR_CHB', 'PR_POMPA AIR': 'PR_POMPA AIR', 'PR_TANGGUL': 'PR_TANGGUL', 'PR_SALURAN': 'PR_SALURAN', 'PR_JUT': 'PR_JUT', });
lyr_KecamatanMuaraTelang_11.set('fieldAliases', {'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'MT_Kecamatan': 'MT_Kecamatan', 'MT_Jumlah Poktan': 'MT_Jumlah Poktan', 'MT_Luas Lahan': 'MT_Luas Lahan', 'MT_IP': 'MT_IP', 'MT_Komoditi': 'MT_Komoditi', 'MT_TR2': 'MT_TR2', 'MT_TR4': 'MT_TR4', 'MT_CHB': 'MT_CHB', 'MT_POMPA AIR': 'MT_POMPA AIR', 'MT_TANGGUL': 'MT_TANGGUL', 'MT_SALURAN': 'MT_SALURAN', 'MT_JUT': 'MT_JUT', });
lyr_KecamatanMuaraSugihan_12.set('fieldAliases', {'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'luas': 'luas', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'MS_Kecamatan': 'MS_Kecamatan', 'MS_Jumlah Poktan': 'MS_Jumlah Poktan', 'MS_Luas Lahan': 'MS_Luas Lahan', 'MS_Indeks Pertanaman': 'MS_Indeks Pertanaman', 'MS_Komoditi': 'MS_Komoditi', 'MS_TR2': 'MS_TR2', 'MS_TR4': 'MS_TR4', 'MS_COMBINE': 'MS_COMBINE', 'MS_POMPA AIR': 'MS_POMPA AIR', 'MS_TANGGUL': 'MS_TANGGUL', 'MS_SALURAN': 'MS_SALURAN', 'MS_JUT': 'MS_JUT', });
lyr_KecamatanMuaraPadang_13.set('fieldAliases', {'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'MP_Kecamatan': 'MP_Kecamatan', 'MP_Jumlah Poktan': 'MP_Jumlah Poktan', 'MP_Luas Lahan': 'MP_Luas Lahan', 'MP_Indeks Pertanaman': 'MP_Indeks Pertanaman', 'MP_Komoditi': 'MP_Komoditi', 'MP_TR2': 'MP_TR2', 'MP_TR4': 'MP_TR4', 'MP_COMBINE': 'MP_COMBINE', 'MP_POMPA AIR': 'MP_POMPA AIR', 'MP_TANGGUL': 'MP_TANGGUL', 'MP_SALURAN': 'MP_SALURAN', 'MP_JUT': 'MP_JUT', });
lyr_KecamatanMakartiJaya_14.set('fieldAliases', {'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'MJ_Kecamatan': 'MJ_Kecamatan', 'MJ_Jumlah Poktan': 'MJ_Jumlah Poktan', 'MJ_Luas Lahan': 'MJ_Luas Lahan', 'MJ_Indeks Pertanaman': 'MJ_Indeks Pertanaman', 'MJ_Komoditi': 'MJ_Komoditi', 'MJ_TR2': 'MJ_TR2', 'MJ_TR4': 'MJ_TR4', 'MJ_COMBINE': 'MJ_COMBINE', 'MJ_POMPA AIR': 'MJ_POMPA AIR', 'MJ_TANGGUL': 'MJ_TANGGUL', 'MJ_SALURAN': 'MJ_SALURAN', 'MJ_JUT': 'MJ_JUT', });
lyr_KecamatanKarangAgungIlir_15.set('fieldAliases', {'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'KAI_Kecamatan': 'KAI_Kecamatan', 'KAI_Jumlah Poktan': 'KAI_Jumlah Poktan', 'KAI_Luas Lahan': 'KAI_Luas Lahan', 'KAI_Indeks Pertanaman': 'KAI_Indeks Pertanaman', 'KAI_Komoditi': 'KAI_Komoditi', 'KAI_TR2': 'KAI_TR2', 'KAI_TR4': 'KAI_TR4', 'KAI_COMBINE': 'KAI_COMBINE', 'KAI_POMPA AIR': 'KAI_POMPA AIR', 'KAI_TANGGUL': 'KAI_TANGGUL', 'KAI_SALURAN': 'KAI_SALURAN', 'KAI_JUT': 'KAI_JUT', });
lyr_KecamatanBanyuasinIII_16.set('fieldAliases', {'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'BA3_Kecamatan': 'BA3_Kecamatan', 'BA3_Jumlah Poktan': 'BA3_Jumlah Poktan', 'BA3_Luas Lahan': 'BA3_Luas Lahan', 'BA3_Indeks Pertanaman': 'BA3_Indeks Pertanaman', 'BA3_Komoditi': 'BA3_Komoditi', 'BA3_TR2': 'BA3_TR2', 'BA3_TR4': 'BA3_TR4', 'BA3_COMBINE': 'BA3_COMBINE', 'BA3_POMPA AIR': 'BA3_POMPA AIR', 'BA3_TANGGUL': 'BA3_TANGGUL', 'BA3_SALURAN': 'BA3_SALURAN', 'BA3_JUT': 'BA3_JUT', });
lyr_KecamatanBanyuasinII_17.set('fieldAliases', {'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'BA2_Kecamatan': 'BA2_Kecamatan', 'BA2_Jumlah Poktan': 'BA2_Jumlah Poktan', 'BA2_Luas Lahan': 'BA2_Luas Lahan', 'BA2_Indeks Pertanaman': 'BA2_Indeks Pertanaman', 'BA2_Komoditi': 'BA2_Komoditi', 'BA2_TR2': 'BA2_TR2', 'BA2_TR4': 'BA2_TR4', 'BA2_COMBINE': 'BA2_COMBINE', 'BA2_POMPA AIR': 'BA2_POMPA AIR', 'BA2_TANGGUL': 'BA2_TANGGUL', 'BA2_SALURAN': 'BA2_SALURAN', 'BA2_JUT': 'BA2_JUT', });
lyr_KecamatanBanyuasinI_18.set('fieldAliases', {'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'BA1_Kecamatan': 'BA1_Kecamatan', 'BA1_Jumlah Poktan': 'BA1_Jumlah Poktan', 'BA1_Luas Lahan': 'BA1_Luas Lahan', 'BA1_Indeks Pertanaman': 'BA1_Indeks Pertanaman', 'BA1_Komoditi': 'BA1_Komoditi', 'BA1_TR2': 'BA1_TR2', 'BA1_TR4': 'BA1_TR4', 'BA1_COMBINE': 'BA1_COMBINE', 'BA1_POMPA AIR': 'BA1_POMPA AIR', 'BA1_TANGGUL': 'BA1_TANGGUL', 'BA1_SALURAN': 'BA1_SALURAN', 'BA1_JUT': 'BA1_JUT', });
lyr_KecamatanAirKumbang_19.set('fieldAliases', {'fid': 'fid', 'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AK_Kecamatan': 'AK_Kecamatan', 'AK_Jumlah Poktan': 'AK_Jumlah Poktan', 'AK_Luas Lahan': 'AK_Luas Lahan', 'AK_Indeks Pertanaman': 'AK_Indeks Pertanaman', 'AK_Komoditi': 'AK_Komoditi', 'AK_TR2': 'AK_TR2', 'AK_TR4': 'AK_TR4', 'AK_COMBINE': 'AK_COMBINE', 'AK_POMPA AIR': 'AK_POMPA AIR', 'AK_TANGGUL': 'AK_TANGGUL', 'AK_SALURAN': 'AK_SALURAN', 'AK_JUT': 'AK_JUT', });
lyr_KecamatanAirSalek_20.set('fieldAliases', {'TIPE_RAWA': 'TIPE_RAWA', 'NAMOBJ': 'NAMOBJ', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'AS_Kecamatan': 'AS_Kecamatan', 'AS_Jumlah Poktan': 'AS_Jumlah Poktan', 'AS_Luas Lahan': 'AS_Luas Lahan', 'AS_Indeks Pertanaman': 'AS_Indeks Pertanaman', 'AS_Komoditi': 'AS_Komoditi', 'AS_TR2': 'AS_TR2', 'AS_TR4': 'AS_TR4', 'AS_COMBINE': 'AS_COMBINE', 'AS_POMPA AIR': 'AS_POMPA AIR', 'AS_TANGGUL': 'AS_TANGGUL', 'AS_SALURAN': 'AS_SALURAN', 'AS_JUT': 'AS_JUT', });
lyr_KecamatanTungkalIlir_1.set('fieldImages', {'fid': 'TextEdit', 'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'TI_Kecamatan': 'TextEdit', 'TI_Jumlah Poktan': 'TextEdit', 'TI_Luas Lahan': 'TextEdit', 'TI_IP': 'TextEdit', 'TI_Komoditi': 'TextEdit', 'TI_TR2': 'TextEdit', 'TI_TR4': 'TextEdit', 'TI_CHB': 'TextEdit', 'TI_POMPA AIR': 'TextEdit', 'TI_TANGGUL': 'TextEdit', 'TI_SALURAN': 'TextEdit', 'TI_JUT': 'TextEdit', });
lyr_KecamatanTanjungLago_2.set('fieldImages', {'fid': 'TextEdit', 'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'TL_Kecamatan': 'TextEdit', 'TL_Jumlah Poktan': 'TextEdit', 'TL_Luas Lahan': 'TextEdit', 'TL_IP': 'TextEdit', 'TL_Komoditi': 'TextEdit', 'TL_TR2': 'TextEdit', 'TL_TR4': 'TextEdit', 'TL_CHB': 'TextEdit', 'TL_POMPA AIR': 'TextEdit', 'TL_TANGGUL': 'TextEdit', 'TL_SALURAN': 'TextEdit', 'TL_JUT': 'TextEdit', });
lyr_KecamatanTalangKelapa_3.set('fieldImages', {'fid': 'TextEdit', 'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'TK_Kecamatan': 'TextEdit', 'TK_Jumlah Poktan': 'TextEdit', 'TK_Luas Lahan': 'TextEdit', 'TK_IP': 'TextEdit', 'TK_Komoditi': 'TextEdit', 'TK_TR2': 'TextEdit', 'TK_TR4': 'TextEdit', 'TK_CHB': 'TextEdit', 'TK_POMPA AIR': 'TextEdit', 'TK_TANGGUL': 'TextEdit', 'TK_SALURAN': 'TextEdit', 'TK_JUT': 'TextEdit', });
lyr_KecamatanSumberMargaTelang_4.set('fieldImages', {'fid': 'TextEdit', 'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SMT_Kecamatan': 'TextEdit', 'SMT_Jumlah Poktan': 'TextEdit', 'SMT_Luas Lahan': 'TextEdit', 'SMT_IP': 'TextEdit', 'SMT_Komoditi': 'TextEdit', 'SMT_TR2': 'TextEdit', 'SMT_TR4': 'TextEdit', 'SMT_CHB': 'TextEdit', 'SMT_POMPA AIR': 'TextEdit', 'SMT_TANGGUL': 'TextEdit', 'SMT_SALURAN': 'TextEdit', 'SMT_JUT': 'TextEdit', });
lyr_KecamatanSuakTapeh_5.set('fieldImages', {'fid': 'TextEdit', 'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ST_Kecamatan': 'TextEdit', 'ST_Jumlah Poktan': 'TextEdit', 'ST_Luas Lahan': 'TextEdit', 'ST_IP': 'TextEdit', 'ST_Komoditi': 'TextEdit', 'ST_TR2': 'TextEdit', 'ST_TR4': 'TextEdit', 'ST_CHB': 'TextEdit', 'ST_POMPA AIR': 'TextEdit', 'ST_TANGGUL': 'TextEdit', 'ST_SALURAN': 'TextEdit', 'ST_JUT': 'TextEdit', });
lyr_KecamatanSelatPenuguan_6.set('fieldImages', {'fid': 'TextEdit', 'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SP_Kecamatan': 'TextEdit', 'SP_Jumlah Poktan': 'TextEdit', 'SP_Luas Lahan': 'TextEdit', 'SP_IP': 'TextEdit', 'SP_Komoditi': 'TextEdit', 'SP_TR2': 'TextEdit', 'SP_TR4': 'TextEdit', 'SP_CHB': 'TextEdit', 'SP_POMPA AIR': 'TextEdit', 'SP_TANGGUL': 'TextEdit', 'SP_SALURAN': 'TextEdit', 'SP_JUT': 'TextEdit', });
lyr_KecamatanSembawa_7.set('fieldImages', {'fid': 'TextEdit', 'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'SE_Kecamatan': 'TextEdit', 'SE_Jumlah Poktan': 'TextEdit', 'SE_Luas Lahan': 'TextEdit', 'SE_IP': 'TextEdit', 'SE_Komoditi': 'TextEdit', 'SE_TR2': 'TextEdit', 'SE_TR4': 'TextEdit', 'SE_CHB': 'TextEdit', 'SE_POMPA AIR': 'TextEdit', 'SE_TANGGUL': 'TextEdit', 'SE_SALURAN': 'TextEdit', 'SE_JUT': 'TextEdit', });
lyr_KecamatanRantauBayur_8.set('fieldImages', {'fid': 'TextEdit', 'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'RB_Kecamatan': 'TextEdit', 'RB_Jumlah Poktan': 'TextEdit', 'RB_Luas Lahan': 'TextEdit', 'RB_IP': 'TextEdit', 'RB_Komoditi': 'TextEdit', 'RB_TR2': 'TextEdit', 'RB_TR4': 'TextEdit', 'RB_CHB': 'TextEdit', 'RB_POMPA AIR': 'TextEdit', 'RB_TANGGUL': 'TextEdit', 'RB_SALURAN': 'TextEdit', 'RB_JUT': 'TextEdit', });
lyr_KecamatanRambutan_9.set('fieldImages', {'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'RA_Kecamatan': 'TextEdit', 'RA_Jumlah Poktan': 'TextEdit', 'RA_Luas Lahan': 'TextEdit', 'RA_IP': 'TextEdit', 'RA_Komoditi': 'TextEdit', 'RA_TR2': 'TextEdit', 'RA_TR4': 'TextEdit', 'RA_CHB': 'TextEdit', 'RA_POMPA AIR': 'TextEdit', 'RA_TANGGUL': 'TextEdit', 'RA_SALURAN': 'TextEdit', 'RA_JUT': 'TextEdit', });
lyr_KecamatanPulauRimau_10.set('fieldImages', {'fid': 'TextEdit', 'TIPE_RAWA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'NAMOBJ': 'TextEdit', 'PR_Kecamatan': 'TextEdit', 'PR_Jumlah Poktan': 'TextEdit', 'PR_Luas Lahan': 'TextEdit', 'PR_IP': 'TextEdit', 'PR_Komoditi': 'TextEdit', 'PR_TR2': 'TextEdit', 'PR_TR4': 'TextEdit', 'PR_CHB': 'TextEdit', 'PR_POMPA AIR': 'TextEdit', 'PR_TANGGUL': 'TextEdit', 'PR_SALURAN': 'TextEdit', 'PR_JUT': 'TextEdit', });
lyr_KecamatanMuaraTelang_11.set('fieldImages', {'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'MT_Kecamatan': 'TextEdit', 'MT_Jumlah Poktan': 'TextEdit', 'MT_Luas Lahan': 'TextEdit', 'MT_IP': 'TextEdit', 'MT_Komoditi': 'TextEdit', 'MT_TR2': 'TextEdit', 'MT_TR4': 'TextEdit', 'MT_CHB': 'TextEdit', 'MT_POMPA AIR': 'TextEdit', 'MT_TANGGUL': 'TextEdit', 'MT_SALURAN': 'TextEdit', 'MT_JUT': 'TextEdit', });
lyr_KecamatanMuaraSugihan_12.set('fieldImages', {'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'luas': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'MS_Kecamatan': 'TextEdit', 'MS_Jumlah Poktan': 'TextEdit', 'MS_Luas Lahan': 'TextEdit', 'MS_Indeks Pertanaman': 'TextEdit', 'MS_Komoditi': 'TextEdit', 'MS_TR2': 'TextEdit', 'MS_TR4': 'TextEdit', 'MS_COMBINE': 'TextEdit', 'MS_POMPA AIR': 'TextEdit', 'MS_TANGGUL': 'TextEdit', 'MS_SALURAN': 'TextEdit', 'MS_JUT': 'TextEdit', });
lyr_KecamatanMuaraPadang_13.set('fieldImages', {'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'MP_Kecamatan': 'TextEdit', 'MP_Jumlah Poktan': 'TextEdit', 'MP_Luas Lahan': 'TextEdit', 'MP_Indeks Pertanaman': 'TextEdit', 'MP_Komoditi': 'TextEdit', 'MP_TR2': 'TextEdit', 'MP_TR4': 'TextEdit', 'MP_COMBINE': 'TextEdit', 'MP_POMPA AIR': 'TextEdit', 'MP_TANGGUL': 'TextEdit', 'MP_SALURAN': 'TextEdit', 'MP_JUT': 'TextEdit', });
lyr_KecamatanMakartiJaya_14.set('fieldImages', {'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'MJ_Kecamatan': 'TextEdit', 'MJ_Jumlah Poktan': 'TextEdit', 'MJ_Luas Lahan': 'TextEdit', 'MJ_Indeks Pertanaman': 'TextEdit', 'MJ_Komoditi': 'TextEdit', 'MJ_TR2': 'TextEdit', 'MJ_TR4': 'TextEdit', 'MJ_COMBINE': 'TextEdit', 'MJ_POMPA AIR': 'TextEdit', 'MJ_TANGGUL': 'TextEdit', 'MJ_SALURAN': 'TextEdit', 'MJ_JUT': 'TextEdit', });
lyr_KecamatanKarangAgungIlir_15.set('fieldImages', {'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'KAI_Kecamatan': 'TextEdit', 'KAI_Jumlah Poktan': 'TextEdit', 'KAI_Luas Lahan': 'TextEdit', 'KAI_Indeks Pertanaman': 'TextEdit', 'KAI_Komoditi': 'TextEdit', 'KAI_TR2': 'TextEdit', 'KAI_TR4': 'TextEdit', 'KAI_COMBINE': 'TextEdit', 'KAI_POMPA AIR': 'TextEdit', 'KAI_TANGGUL': 'TextEdit', 'KAI_SALURAN': 'TextEdit', 'KAI_JUT': 'TextEdit', });
lyr_KecamatanBanyuasinIII_16.set('fieldImages', {'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'BA3_Kecamatan': 'TextEdit', 'BA3_Jumlah Poktan': 'TextEdit', 'BA3_Luas Lahan': 'TextEdit', 'BA3_Indeks Pertanaman': 'TextEdit', 'BA3_Komoditi': 'TextEdit', 'BA3_TR2': 'TextEdit', 'BA3_TR4': 'TextEdit', 'BA3_COMBINE': 'TextEdit', 'BA3_POMPA AIR': 'TextEdit', 'BA3_TANGGUL': 'TextEdit', 'BA3_SALURAN': 'TextEdit', 'BA3_JUT': 'TextEdit', });
lyr_KecamatanBanyuasinII_17.set('fieldImages', {'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'BA2_Kecamatan': 'TextEdit', 'BA2_Jumlah Poktan': 'TextEdit', 'BA2_Luas Lahan': 'TextEdit', 'BA2_Indeks Pertanaman': 'TextEdit', 'BA2_Komoditi': 'TextEdit', 'BA2_TR2': 'TextEdit', 'BA2_TR4': 'TextEdit', 'BA2_COMBINE': 'TextEdit', 'BA2_POMPA AIR': 'TextEdit', 'BA2_TANGGUL': 'TextEdit', 'BA2_SALURAN': 'TextEdit', 'BA2_JUT': 'TextEdit', });
lyr_KecamatanBanyuasinI_18.set('fieldImages', {'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'BA1_Kecamatan': 'TextEdit', 'BA1_Jumlah Poktan': 'TextEdit', 'BA1_Luas Lahan': 'TextEdit', 'BA1_Indeks Pertanaman': 'TextEdit', 'BA1_Komoditi': 'TextEdit', 'BA1_TR2': 'TextEdit', 'BA1_TR4': 'TextEdit', 'BA1_COMBINE': 'TextEdit', 'BA1_POMPA AIR': 'TextEdit', 'BA1_TANGGUL': 'TextEdit', 'BA1_SALURAN': 'TextEdit', 'BA1_JUT': 'TextEdit', });
lyr_KecamatanAirKumbang_19.set('fieldImages', {'fid': 'TextEdit', 'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AK_Kecamatan': 'TextEdit', 'AK_Jumlah Poktan': 'TextEdit', 'AK_Luas Lahan': 'TextEdit', 'AK_Indeks Pertanaman': 'TextEdit', 'AK_Komoditi': 'TextEdit', 'AK_TR2': 'TextEdit', 'AK_TR4': 'TextEdit', 'AK_COMBINE': 'TextEdit', 'AK_POMPA AIR': 'TextEdit', 'AK_TANGGUL': 'TextEdit', 'AK_SALURAN': 'TextEdit', 'AK_JUT': 'TextEdit', });
lyr_KecamatanAirSalek_20.set('fieldImages', {'TIPE_RAWA': 'TextEdit', 'NAMOBJ': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'AS_Kecamatan': 'TextEdit', 'AS_Jumlah Poktan': 'TextEdit', 'AS_Luas Lahan': 'TextEdit', 'AS_Indeks Pertanaman': 'TextEdit', 'AS_Komoditi': 'TextEdit', 'AS_TR2': 'TextEdit', 'AS_TR4': 'TextEdit', 'AS_COMBINE': 'TextEdit', 'AS_POMPA AIR': 'TextEdit', 'AS_TANGGUL': 'TextEdit', 'AS_SALURAN': 'TextEdit', 'AS_JUT': 'TextEdit', });
lyr_KecamatanTungkalIlir_1.set('fieldLabels', {'fid': 'no label', 'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'TI_Kecamatan': 'no label', 'TI_Jumlah Poktan': 'inline label', 'TI_Luas Lahan': 'inline label', 'TI_IP': 'inline label', 'TI_Komoditi': 'inline label', 'TI_TR2': 'inline label', 'TI_TR4': 'inline label', 'TI_CHB': 'inline label', 'TI_POMPA AIR': 'inline label', 'TI_TANGGUL': 'inline label', 'TI_SALURAN': 'inline label', 'TI_JUT': 'inline label', });
lyr_KecamatanTanjungLago_2.set('fieldLabels', {'fid': 'inline label', 'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'TL_Kecamatan': 'no label', 'TL_Jumlah Poktan': 'inline label', 'TL_Luas Lahan': 'inline label', 'TL_IP': 'inline label', 'TL_Komoditi': 'inline label', 'TL_TR2': 'inline label', 'TL_TR4': 'inline label', 'TL_CHB': 'inline label', 'TL_POMPA AIR': 'inline label', 'TL_TANGGUL': 'inline label', 'TL_SALURAN': 'inline label', 'TL_JUT': 'inline label', });
lyr_KecamatanTalangKelapa_3.set('fieldLabels', {'fid': 'no label', 'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'TK_Kecamatan': 'no label', 'TK_Jumlah Poktan': 'inline label', 'TK_Luas Lahan': 'inline label', 'TK_IP': 'inline label', 'TK_Komoditi': 'inline label', 'TK_TR2': 'inline label', 'TK_TR4': 'inline label', 'TK_CHB': 'inline label', 'TK_POMPA AIR': 'inline label', 'TK_TANGGUL': 'inline label', 'TK_SALURAN': 'inline label', 'TK_JUT': 'inline label', });
lyr_KecamatanSumberMargaTelang_4.set('fieldLabels', {'fid': 'no label', 'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SMT_Kecamatan': 'no label', 'SMT_Jumlah Poktan': 'inline label', 'SMT_Luas Lahan': 'inline label', 'SMT_IP': 'inline label', 'SMT_Komoditi': 'inline label', 'SMT_TR2': 'inline label', 'SMT_TR4': 'inline label', 'SMT_CHB': 'inline label', 'SMT_POMPA AIR': 'inline label', 'SMT_TANGGUL': 'inline label', 'SMT_SALURAN': 'inline label', 'SMT_JUT': 'inline label', });
lyr_KecamatanSuakTapeh_5.set('fieldLabels', {'fid': 'no label', 'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ST_Kecamatan': 'no label', 'ST_Jumlah Poktan': 'inline label', 'ST_Luas Lahan': 'inline label', 'ST_IP': 'inline label', 'ST_Komoditi': 'inline label', 'ST_TR2': 'inline label', 'ST_TR4': 'inline label', 'ST_CHB': 'inline label', 'ST_POMPA AIR': 'inline label', 'ST_TANGGUL': 'inline label', 'ST_SALURAN': 'inline label', 'ST_JUT': 'inline label', });
lyr_KecamatanSelatPenuguan_6.set('fieldLabels', {'fid': 'no label', 'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SP_Kecamatan': 'no label', 'SP_Jumlah Poktan': 'inline label', 'SP_Luas Lahan': 'inline label', 'SP_IP': 'inline label', 'SP_Komoditi': 'inline label', 'SP_TR2': 'inline label', 'SP_TR4': 'inline label', 'SP_CHB': 'inline label', 'SP_POMPA AIR': 'inline label', 'SP_TANGGUL': 'inline label', 'SP_SALURAN': 'inline label', 'SP_JUT': 'inline label', });
lyr_KecamatanSembawa_7.set('fieldLabels', {'fid': 'no label', 'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'SE_Kecamatan': 'no label', 'SE_Jumlah Poktan': 'inline label', 'SE_Luas Lahan': 'inline label', 'SE_IP': 'inline label', 'SE_Komoditi': 'inline label', 'SE_TR2': 'inline label', 'SE_TR4': 'inline label', 'SE_CHB': 'inline label', 'SE_POMPA AIR': 'inline label', 'SE_TANGGUL': 'inline label', 'SE_SALURAN': 'inline label', 'SE_JUT': 'inline label', });
lyr_KecamatanRantauBayur_8.set('fieldLabels', {'fid': 'no label', 'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'RB_Kecamatan': 'no label', 'RB_Jumlah Poktan': 'inline label', 'RB_Luas Lahan': 'inline label', 'RB_IP': 'inline label', 'RB_Komoditi': 'inline label', 'RB_TR2': 'inline label', 'RB_TR4': 'inline label', 'RB_CHB': 'inline label', 'RB_POMPA AIR': 'inline label', 'RB_TANGGUL': 'inline label', 'RB_SALURAN': 'inline label', 'RB_JUT': 'inline label', });
lyr_KecamatanRambutan_9.set('fieldLabels', {'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'RA_Kecamatan': 'no label', 'RA_Jumlah Poktan': 'inline label', 'RA_Luas Lahan': 'inline label', 'RA_IP': 'inline label', 'RA_Komoditi': 'inline label', 'RA_TR2': 'inline label', 'RA_TR4': 'inline label', 'RA_CHB': 'inline label', 'RA_POMPA AIR': 'inline label', 'RA_TANGGUL': 'inline label', 'RA_SALURAN': 'inline label', 'RA_JUT': 'inline label', });
lyr_KecamatanPulauRimau_10.set('fieldLabels', {'fid': 'no label', 'TIPE_RAWA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'NAMOBJ': 'no label', 'PR_Kecamatan': 'no label', 'PR_Jumlah Poktan': 'inline label', 'PR_Luas Lahan': 'inline label', 'PR_IP': 'inline label', 'PR_Komoditi': 'inline label', 'PR_TR2': 'inline label', 'PR_TR4': 'inline label', 'PR_CHB': 'inline label', 'PR_POMPA AIR': 'inline label', 'PR_TANGGUL': 'inline label', 'PR_SALURAN': 'inline label', 'PR_JUT': 'inline label', });
lyr_KecamatanMuaraTelang_11.set('fieldLabels', {'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'MT_Kecamatan': 'no label', 'MT_Jumlah Poktan': 'inline label', 'MT_Luas Lahan': 'inline label', 'MT_IP': 'inline label', 'MT_Komoditi': 'inline label', 'MT_TR2': 'inline label', 'MT_TR4': 'inline label', 'MT_CHB': 'inline label', 'MT_POMPA AIR': 'inline label', 'MT_TANGGUL': 'inline label', 'MT_SALURAN': 'inline label', 'MT_JUT': 'inline label', });
lyr_KecamatanMuaraSugihan_12.set('fieldLabels', {'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'luas': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'MS_Kecamatan': 'no label', 'MS_Jumlah Poktan': 'inline label', 'MS_Luas Lahan': 'inline label', 'MS_Indeks Pertanaman': 'inline label', 'MS_Komoditi': 'inline label', 'MS_TR2': 'inline label', 'MS_TR4': 'inline label', 'MS_COMBINE': 'inline label', 'MS_POMPA AIR': 'inline label', 'MS_TANGGUL': 'inline label', 'MS_SALURAN': 'inline label', 'MS_JUT': 'inline label', });
lyr_KecamatanMuaraPadang_13.set('fieldLabels', {'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'MP_Kecamatan': 'no label', 'MP_Jumlah Poktan': 'inline label', 'MP_Luas Lahan': 'inline label', 'MP_Indeks Pertanaman': 'inline label', 'MP_Komoditi': 'inline label', 'MP_TR2': 'inline label', 'MP_TR4': 'inline label', 'MP_COMBINE': 'inline label', 'MP_POMPA AIR': 'inline label', 'MP_TANGGUL': 'inline label', 'MP_SALURAN': 'inline label', 'MP_JUT': 'inline label', });
lyr_KecamatanMakartiJaya_14.set('fieldLabels', {'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'MJ_Kecamatan': 'no label', 'MJ_Jumlah Poktan': 'inline label', 'MJ_Luas Lahan': 'inline label', 'MJ_Indeks Pertanaman': 'inline label', 'MJ_Komoditi': 'inline label', 'MJ_TR2': 'inline label', 'MJ_TR4': 'inline label', 'MJ_COMBINE': 'inline label', 'MJ_POMPA AIR': 'inline label', 'MJ_TANGGUL': 'inline label', 'MJ_SALURAN': 'inline label', 'MJ_JUT': 'inline label', });
lyr_KecamatanKarangAgungIlir_15.set('fieldLabels', {'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'KAI_Kecamatan': 'no label', 'KAI_Jumlah Poktan': 'inline label', 'KAI_Luas Lahan': 'inline label', 'KAI_Indeks Pertanaman': 'inline label', 'KAI_Komoditi': 'inline label', 'KAI_TR2': 'inline label', 'KAI_TR4': 'inline label', 'KAI_COMBINE': 'inline label', 'KAI_POMPA AIR': 'inline label', 'KAI_TANGGUL': 'inline label', 'KAI_SALURAN': 'inline label', 'KAI_JUT': 'inline label', });
lyr_KecamatanBanyuasinIII_16.set('fieldLabels', {'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'BA3_Kecamatan': 'no label', 'BA3_Jumlah Poktan': 'inline label', 'BA3_Luas Lahan': 'inline label', 'BA3_Indeks Pertanaman': 'inline label', 'BA3_Komoditi': 'inline label', 'BA3_TR2': 'inline label', 'BA3_TR4': 'inline label', 'BA3_COMBINE': 'inline label', 'BA3_POMPA AIR': 'inline label', 'BA3_TANGGUL': 'inline label', 'BA3_SALURAN': 'inline label', 'BA3_JUT': 'inline label', });
lyr_KecamatanBanyuasinII_17.set('fieldLabels', {'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'BA2_Kecamatan': 'no label', 'BA2_Jumlah Poktan': 'inline label', 'BA2_Luas Lahan': 'inline label', 'BA2_Indeks Pertanaman': 'inline label', 'BA2_Komoditi': 'inline label', 'BA2_TR2': 'inline label', 'BA2_TR4': 'inline label', 'BA2_COMBINE': 'inline label', 'BA2_POMPA AIR': 'inline label', 'BA2_TANGGUL': 'inline label', 'BA2_SALURAN': 'inline label', 'BA2_JUT': 'inline label', });
lyr_KecamatanBanyuasinI_18.set('fieldLabels', {'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'BA1_Kecamatan': 'no label', 'BA1_Jumlah Poktan': 'inline label', 'BA1_Luas Lahan': 'inline label', 'BA1_Indeks Pertanaman': 'inline label', 'BA1_Komoditi': 'inline label', 'BA1_TR2': 'inline label', 'BA1_TR4': 'inline label', 'BA1_COMBINE': 'inline label', 'BA1_POMPA AIR': 'inline label', 'BA1_TANGGUL': 'inline label', 'BA1_SALURAN': 'inline label', 'BA1_JUT': 'inline label', });
lyr_KecamatanAirKumbang_19.set('fieldLabels', {'fid': 'no label', 'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AK_Kecamatan': 'no label', 'AK_Jumlah Poktan': 'inline label', 'AK_Luas Lahan': 'inline label', 'AK_Indeks Pertanaman': 'inline label', 'AK_Komoditi': 'inline label', 'AK_TR2': 'inline label', 'AK_TR4': 'inline label', 'AK_COMBINE': 'inline label', 'AK_POMPA AIR': 'inline label', 'AK_TANGGUL': 'inline label', 'AK_SALURAN': 'inline label', 'AK_JUT': 'inline label', });
lyr_KecamatanAirSalek_20.set('fieldLabels', {'TIPE_RAWA': 'no label', 'NAMOBJ': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'AS_Kecamatan': 'no label', 'AS_Jumlah Poktan': 'inline label', 'AS_Luas Lahan': 'inline label', 'AS_Indeks Pertanaman': 'inline label', 'AS_Komoditi': 'inline label', 'AS_TR2': 'inline label', 'AS_TR4': 'inline label', 'AS_COMBINE': 'inline label', 'AS_POMPA AIR': 'inline label', 'AS_TANGGUL': 'inline label', 'AS_SALURAN': 'inline label', 'AS_JUT': 'inline label', });
lyr_KecamatanAirSalek_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});