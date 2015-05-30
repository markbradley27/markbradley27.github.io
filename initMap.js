function initialize() {
    var mapOptions = {
        center: { lat: 39, lng: -95},
        zoom: 4
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var testPath = new google.maps.Polyline({
        path: google.maps.geometry.encoding.decodePath("{y}`G~qb~Ny@gBV`A}CV}d@AeA}\\_PHc@}JrBc@kBJUsCjB[]u@N|A_AgA@~QkS\\wAkBGvHyH`@kDmCUmEuVGsIkP}FdGjGxBn@vN{D~K{JvGuDxIaAhPiCaAhClCBpEmA`@kY_FuIgIyBxBwQz@wGvC}CnEax@v@gWwByYrCapAvY{{@cA{lAzAmWmEkVV{\\vQaYhD{EjCmi@tm@so@d~@s[hBoIyDj@vh@}xB`E{Kb@uC~CqSr@Lba@eSzAdCxNl@fg@_o@nBuc@xOkTpBaDvBc@jMkUJu]sE{o@h{Cch@`gAyCbXN~IuPjjD~@dn@`BzQjXzhIi@|lDl@`Qm@rj@mBbXq]to@mDbMq@|ID`xKz@dRjC|M}GIgRrE@lWgBhEc`AhDwA~mCcq@~g@mLld@sYdp@SdjAwWp_AyB~r@_Vvh@k_@prAum@nCkDdvDab@jBadA~{DwgBbBo@vt@aD~NaMb\\sBf_@i@vuAdA|sEMvPmAjCrAlBE`r@|@zB_A~AElMe@neKaB`MqKt_@}KlRqJnm@eJhQiA`PyJlf@e}@byCoOd|A[d`@qAO@vCxBgM{B`Mj@eI?~Dy\\a@UjDgGzEmBo@aKbDoByAmOtViL|H{Gr@iDxEeCmBOz~@kAp^r@bQq~@dwA}bRjAcK_LmKyAu@_SepBkAqZp{@f@pFiAfMhBzGDzFsd@aB"),
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 3
    });

    testPath.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);
