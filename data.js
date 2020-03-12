let data = {
  assignments: [
     {
      num: 34,
      questions: [
        {
          num: 1,
          text: `An air-filled parallel-plate capacitor has a capacitance of *3.3* pF. The separation of the plates is doubled and wax is inserted between them. The new capacitance is *6.6* pF. Find the dielectric constant of the wax.`,
          answers: [
            {
              text: "",
              value: (input) => (2 * input[1]) / input[0],
              unit: ""
            }
          ]
        },
        {
          num: 2,
          text: `A coaxial cable used in a transmission line has an inner radius of *0.11* mm and an outer radius of *0.51* mm. Calculate the capacitance per meter for the cable. Assume that the space between the conductors is filled with polystyrene. (Also assume that the outer conductor is infinitesimally thin.)`,
          answers: [
            {
              text: "",
              value: (input) => (5.2 * Math.PI * EPSILON_NAUGHT) / Math.log(input[1] / input[0]) / p,
              unit: "pF/m"
            }
          ]
        },
        {
          num: 3,
          text: `You are asked to construct a capacitor having a capacitance near 1 nF and a breakdown potential in excess of 10,000 V. You think of using the sides of a tall Pyrex drinking glass as a dielectric, lining the inside and outside curved surfaces with aluminum foil to act as the plates. The glass is *19* cm tall with an inner radius of *3.4* cm and an outer radius of *3.9* cm.`,
          answers: [
            {
              text: "(a) What is the capacitance?",
              value: (input) => (9.4 * Math.PI * EPSILON_NAUGHT) * (input[0] * c) / n / Math.log(input[2] / input[1]),
              unit: "nF"
            },
            {
              text: "(b) What is the breakdown potential of this capacitor?",
              value: (input) => 30 * (input[2] - input[1]) * 4.7,
              unit: "kV"
            }
          ]
        },
        {
          num: 4,
          text: `A certain parallel-plate capacitor is filled with a dielectric for which &kappa; = *6.5*. The area of each plate is *0.029* m<sup>2</sup>, and the plates are separated by 2.0 mm. The capacitor will fail (short out and burn up) if the electric field between the plates exceeds 200 kN/C. What is the maximum energy that can be stored in the capacitor?`,
          answers: [
            {
              text: "",
              value: (input) => {
                let C = input[1] / (2 * m) * EPSILON_NAUGHT * input[0];
                let E = 200 * k;
                return 0.5 * C * Math.pow(E, 2) * 4 * Math.pow(m, 2);
              },
              unit: "J"
            }
          ]
        },
        {
          num: 5,
          text: `In the figure below, how much charge is stored on the parallel plate capacitors by the 12.0 V battery? One is filled with air, and the other is filled with a dielectric for which &kappa; = *3.25*; both have a plate area of *5.15* &#215; 10<sup>-3</sup> m<sup>2</sup> and a plate separation of 2.00 mm.`,
          answers: [
            {
              text: "",
              value: (input) => {
                let C = (input[1] * m) / (2 * m) * EPSILON_NAUGHT * (input[0] + 1.0006);
                return 12 * C;
              },
              unit: "C"
            }
          ]
        },
        {
          num: 6,
          text: `A certain substance has a dielectric constant of *3.0* and a dielectric strength of *16* MV/m. If it is used as the dielectric material in a parallel-plate capacitor, what minimum area should the plates of the capacitor have to obtain a capacitance of 7.0 &#215; 10<sup>-2</sup> &mu;F and to ensure that the capacitor will be able to withstand a potential difference of 4.0 kV?`,
          answers: [
            {
              text: "",
              value: (input) => {
                let d = 4000 / (input[1] * M);
                return 0.07 * u * d  / EPSILON_NAUGHT / input[0];
              },
              unit: "m<sup>2</sup>"
            }
          ]
        },
        {
          num: 7,
          text: `The figure below shows a parallel plate capacitor of plate area A = *12.4* cm<sup>2</sup> and plate separation 2d = *6.99* mm. The left half of the gap is filled with material of dielectric constant &kappa;<sub>1</sub> = 21.0; the top of the right half is filled with material of dielectric constant &kappa;<sub>2</sub> = 42.0; the bottom of the right half is filled with material of dielectric constant &kappa;<sub>3</sub> = 58.0. What is the capacitance?`,
          answers: [
            {
              text: "",
              value: (input) => {
                let C1 = 21 * input[0] * Math.pow(c, 2) * EPSILON_NAUGHT / (input[1] * m);
                let C2 = input[0] * Math.pow(c, 2) * EPSILON_NAUGHT * 42 * 58 / ((input[1] * m) / 2 * (58 + 42));
                return (C1 + C2) / 2;
              },
              unit: "F"
            }
          ]
        },
        {
          num: 8,
          text: `The figure below shows a parallel plate capacitor of plate area <em>A</em> = *110* cm<sup>2</sup> and plate separation <em>d</em> = *1.30* cm. A potential difference of <em>V<sub>0</sub></em> = *57.0* V is applied between the plates. Suppose that the battery remains connected while the dielectric slab of thickness <em>b</em> = 0.780 cm and dielectric constant &kappa; = *2.70* is being introduced. Calculate the following values.`,
          answers: [
            {
              text: "(a) the capacitence",
              value: (input) => {
                let d = 0.78 * c * (1 / input[3] - 1) + input[1] * c;
                return EPSILON_NAUGHT * input[0] * Math.pow(c, 2) / d / p;
              },
              unit: "pF"
            },
            {
              text: "(b) the charge on the capacitor plates",
              value: (input) => {
                console.log(data.assignments[0].questions[7].answers[0].value(input));
                let C = data.assignments[0].questions[7].answers[0].value(input) * p;
                return C * input[2] / n;
              },
              unit: "nC"
            },
            {
              text: "(c) the electric field in the gap",
              value: (input) => {
                let q = data.assignments[0].questions[7].answers[1].value(input) * n;
                return q / (input[0] * Math.pow(c, 2)) / EPSILON_NAUGHT;
              },
              unit: "N/C"
            },
            {
              text: "(d) the electric field in the slab, after the slab is in place",
              value: (input) => {
                let E = data.assignments[0].questions[7].answers[2].value(input);
                return E / input[3];
              },
              unit: "N/C"
            },
          ]
        },
        {
          num: 9,
          text: `Two parallel plates of area *140* cm<sup>2</sup> are given charges of equal magnitudes *9.5* &#215; 10<sup>-7</sup> C but opposite signs. The electric field within the dielectric material filling the space between the plates is *2.5* &#215; 10<sup>6</sup> V/m.`,
          answers: [
            {
              text: "(a) Calculate the dielectric constant of the material.",
              value: (input) => {
                return input[1] * 1e-7 / (input[0] * Math.pow(c, 2) * EPSILON_NAUGHT * input[2] * M);
              },
              unit: ""
            },
            {
              text: "(b) Determine the magnitude of the charge induced on each dielectric surface.",
              value: (input) => {
                return input[1] * 1e-7 - input[2] * M * input[0] * Math.pow(c, 2) * EPSILON_NAUGHT;
              },
              unit: ""
            },
          ]
        },
      ],
    },
  ]
};

const p = 1e-12;
const n = 1e-9;
const u = 1e-6;
const m = 0.001;
const c = 0.01;

const k = 1000;
const M = 1e6;
const G = 1e9;

const EPSILON_NAUGHT = 8.854 * p;
const ELECTRON_CHARGE = 1.60217662 * Math.pow(10, -19);

// {
//   num: 8,
//   text: `The figure below shows a parallel plate capacitor of plate area <em>A</em> = *110* cm<sup>2</sup> and plate separation <em>d</em> = *1.30* cm. A potential difference of <em>V<sub>0</sub></em> = *57.0* V is applied between the plates. Suppose that the battery remains connected while the dielectric slab of thickness <em>b</em> = 0.780 cm and dielectric constant &kappa; = *2.70* is being introduced. Calculate the following values.`,
//   answers: [
//     {
//       text: "(a) the capacitence",
//       value: (input) => {
//         let d = 0.78 * c * (1 / input[3] - 1) + input[1] * c;
//         return EPSILON_NAUGHT * input[0] * Math.pow(c, 2) / d / p;
//       },
//       unit: "pF"
//     },
//     {
//       text: "(b) the charge on the capacitor plates",
//       value: (input) => {
//         console.log(data.assignments[0].questions[7].answers[0].value(input));
//         let C = data.assignments[0].questions[7].answers[0].value(input);
//         return C * input[2] / n;
//       },
//       unit: "nC"
//     }
//   ]
// },



