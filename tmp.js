const r = [
  { "id": 11, "name": "Part_1",  "type": "PART", },
  { "id": 12, "name": "Recip_1", "type": "RECIP", },
  { "id": 13, "name": "Stloi_1", "type": "STLOI",  },
  { "id": 14, "name": "Part_2",  "type": "PART",  },
  { "id": 15, "name": "TYP_1", "type": "TYP", },
  { "id": 16, "name": "Recip_2", "type": "RECIP", },/**/
];


for (const p of r) {
  if (p.type !== "PART" && p.type !== "RECIP") {
    console.log(p);
  }
}