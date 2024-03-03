import localFont from 'next/font/local';

export const rubik = localFont({
  src: [
    {
      path: "../../public/fonts/Rubik-VariableFont_wght.ttf",
      style: "normal"
    },
    {
      path: "../../public/fonts/Rubik-Italic-VariableFont_wght.ttf",
      style: "italic"
    },
  ],
})
