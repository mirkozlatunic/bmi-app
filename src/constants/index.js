import gender from "../assets/images/icon-gender.svg";
import age from "../assets/images/icon-age.svg";
import muscle from "../assets/images/icon-muscle.svg";
import pregnancy from "../assets/images/icon-pregnancy.svg";
import race from "../assets/images/icon-race.svg";

export const cards = [
  {
    image: gender,
    title: "Gender",
    text: "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    image: age,
    title: "Age",
    text: "In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.",
  },
  {
    image: muscle,
    title: "Muscle",
    text: "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    image: pregnancy,
    title: "Pregnancy",
    text: "Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.",
  },
  {
    image: race,
    title: "Race",
    text: "Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.",
  },
];
