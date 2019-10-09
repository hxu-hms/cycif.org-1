const marker_links_csv = `String,Alias,Link
ARL13B,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=ARL13B&keywords=ARL13B
ASMA,"A-SMA, alpha-SMA, α-SMA","https://www.genecards.org/cgi-bin/carddisp.pl?gene=ACTA2&keywords=alpha,smooth,muscle,actin"
BANF1,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=BANF1&keywords=BANF1
CD11B,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=ITGAM&keywords=CD11B
CD14,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD14&keywords=CD14
CD163,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD163&keywords=CD163
CD19,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD19&keywords=CD19
CD20,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=MS4A1&keywords=CD20
CD21,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CR2&keywords=CD21
CD3D,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD3D&keywords=CD3D
CD4,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD4&keywords=CD4
CD45,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=PTPRC&keywords=CD45
CD45RB,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=PTPRC&keywords=CD45RB
CD68,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD68&keywords=CD68
CD8A,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD8A&keywords=CD8A
FOXP3,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=FOXP3&keywords=FOXP3
GFAP,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=GFAP&keywords=GFAP
GTUBULIN,gamma-tubulin,"https://www.genecards.org/cgi-bin/carddisp.pl?gene=TUBG1&keywords=gamma,tubulin"
IBA1,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=AIF1&keywords=IBA1
KERATIN,,https://www.genecards.org/Search/Keyword?queryString=KERATIN
KI67,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=MKI67&keywords=KI67
LAG3,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=LAG3&keywords=LAG3
LAMINAC,,"https://www.genecards.org/cgi-bin/carddisp.pl?gene=LMNA&keywords=LAMIN,AC"
LAMINB,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=LMNB1&keywords=LAMINB
PD-1,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=PDCD1&keywords=PD-1
PD-L1,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD274&keywords=PD-L1
CD19,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD19&keywords=CD19
CD14,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD14&keywords=CD11c
CD56,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=NCAM1&keywords=CD56
CD34,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD34&keywords=CD34
CD44,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD44&keywords=CD34
CD14,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD14&keywords=CD14
CD33,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD33&keywords=CD33
CD41,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=ITGA2B&keywords=CD41
CD61,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=ITGB3&keywords=CD61
CD62,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=SELP&keywords=CD62
CD146,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=MCAM&keywords=CD146
CD1d,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD1D&keywords=CD1d
CD2,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD2&keywords=CD2
CD5,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD5&keywords=cd5
CD7,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD7&keywords=CD7
CD9,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD9&keywords=CD9
CD10,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=MME&keywords=CD10
CD11A,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=ITGAL&keywords=CD11A
CD70,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD70&keywords=CD70
CD74,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=CD74&keywords=CD74
CD103,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=ITGAE&keywords=CD103
CD133,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=PROM1&keywords=CD133
CD168,,https://www.genecards.org/cgi-bin/carddisp.pl?gene=HMMR&keywords=CD168
`
function strip(str) {
    return str.replace(/^\s+|\s+$/g, '');
}

const marker_links_data = $.csv.toObjects(marker_links_csv);

const marker_alias_map = new Map();
marker_links_data.filter(d => d.Alias).forEach(function(d) {
  d.Alias.split(',').forEach(function(a) {
    marker_alias_map.set(strip(a), strip(d.String));
  });
});

const marker_links_map = new Map();
marker_links_data.filter(d => d.Link).forEach(function(d) {
  if (d.Alias) {
    d.Alias.split(',').forEach(function(a) {
      marker_links_map.set(strip(a), strip(d.Link));
    }); 
  }
  marker_links_map.set(strip(d.String), strip(d.Link));
});
