const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",
  sectionHeading : "text-gray-800 text-[38px] font-semibold font-space",
  UiHeading : "text-gray-800 text-[28px] md:text-[25px] font-semibold font-space",
  UIMenu: 'text-[24px] text-gray-700 font-semibold hover:text-blue-600',
  SettingsIcon: 'text-[20px] text-gray-500',
  UiSubHeading : "text-gray-600 text-[18px] sm:text-[15px] font-semibold font-space",
  sectionHeadingCenter : "text-gray-800 text-[38px] font-semibold font-space text-center",
  sectionSubHeading : "text-gray-800 text-[30px] font-semibold font-space",
  sectionSubHeadingCenter : "text-gray-800 text-[30px] font-semibold font-space text-center",
  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  
  paragraph: "font-poppins font-normal text-dim White text-[18px] leading-[30.8px]",

  content: 'text-gray-800 font-normal text-[18px] leading-[20px] sm:text-xl',
  contentCenter: 'text-gray-800 font-normal text-[18px] leading-[20px] sm:text-xl text-center',

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  container: `h-[100vh]`,
  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
