L.LatLngBounds.prototype.toOverpassBBoxString = function(){
	var sw = this._southWest;
	var ne = this._northEast;
	return [sw.lat, sw.lng, ne.lat, ne.lng].join(',');
};

L.Polygon.prototype.getCenter = function(){	
	var pts = this._latlngs;
	
	var off = pts[0];
	var twicearea = 0;
	var x = 0;
	var y = 0;
	var nPts = pts.length;
	var p1,p2;
	var f;
	
	for(var i=0,j=nPts-1;i<nPts;j=i++){
		p1 = pts[i];
		p2 = pts[j];
		f = (p1.lat - off.lat) * (p2.lng - off.lng) - (p2.lat - off.lat) * (p1.lng - off.lng);
		twicearea += f;
		x += (p1.lat + p2.lat - 2 * off.lat) * f;
		y += (p1.lng + p2.lng - 2 * off.lng) * f;
	}
	f = twicearea * 3;
	
	return new L.LatLng(
		x / f + off.lat,
		y / f + off.lng
	);
};
/*
L.Polygon.prototype.getArea = function(){
	var pts = this._latlngs;
	
	var off = pts[0];
	var twicearea = 0;
	var x = 0;
	var y = 0;
	var nPts = pts.length;
	var p1,p2;
	var f;
	
	var area = 0.0;
	
	for(var i=0,j=nPts-1;i<nPts;j=i++){
		p1 = pts[i];
		p2 = pts[j];
		f = (p1.lat - off.lat) * (p2.lng - off.lng) - (p2.lat - off.lat) * (p1.lng - off.lng);
		twicearea += f;
	}
	area = twicearea / 2;
	
	return area;
};*/