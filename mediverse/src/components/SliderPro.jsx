import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function SliderPro() {
  return (
    <div style={{ width: '96%', margin: '40px auto', cursor: 'pointer' }}>
      <Carousel
        responsive={responsive}
        showDots={true}
        focusOnSelect={true}
        autoPlay={true}
        infinite={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        shouldResetAutoplay={true}
      >
        <div  style={{ borderRadius: '', marginRight: '20px' }}>
          <img 
            style={{ borderRadius: '10px', height:"300px" }}
            src="https://img.freepik.com/free-photo/young-male-psysician-with-patient-measuring-blood-pressure_1303-17881.jpg?size=626&ext=jpg&ga=GA1.1.205266656.1682997817&semt=ais"
          />
        </div>
        <div style={{ borderRadius: '30px', marginRight: '20px' }}>
          <img
            style={{ borderRadius: '10px' , height:"300px"  }}
            src="https://img.freepik.com/premium-photo/modern-equipment-operating-room-medical-devices-neurosurgery_179755-863.jpg?size=626&ext=jpg&ga=GA1.1.205266656.1682997817&semt=sph"
          />
        </div>
        <div style={{ borderRadius: '30px', marginRight: '20px' }}>
          <img
            style={{ borderRadius: '10px' , height:"300px" }}
            src="https://img.freepik.com/free-photo/side-view-doctor-writing-prescription_23-2148231339.jpg?size=626&ext=jpg&ga=GA1.1.205266656.1682997817&semt=ais"
          />
        </div>
        <div style={{ borderRadius: '30px', marginRight: '20px' }}>
          <img
            style={{ borderRadius: '10px' , height:"300px" }}
            src="https://img.freepik.com/premium-photo/happy-medical-team-using-laptop-together_13339-250352.jpg?size=626&ext=jpg&ga=GA1.2.205266656.1682997817&semt=sph"
          />
        </div>
        <div style={{ borderRadius: '30px', marginRight: '20px' }}>
          <img
            style={{ borderRadius: '10px' , height:"300px" }}
            src="https://img.freepik.com/free-photo/medical-physician-doctor-man_1150-15053.jpg?size=626&ext=jpg&ga=GA1.1.205266656.1682997817&semt=ais"
          />
        </div>
        <div style={{ borderRadius: '30px', marginRight: '10px' }}>
          <img
            style={{ borderRadius: '10px' , height:"300px" }}
            src="https://img.freepik.com/free-photo/young-doctor-supporting-his-patient_1098-2237.jpg?w=1060&t=st=1683215975~exp=1683216575~hmac=c82e16c171c18e324674e46e3bad784d78e16f30c4180f38855f6f3bee45f7d5"
          />
        </div>

        <div style={{ borderRadius: '30px', marginRight: '20px' }}>
          <img
            style={{ borderRadius: '10px' , height:"300px" }}
            src="https://img.freepik.com/free-photo/doctor-checking-medical-condition-patient_23-2148728404.jpg?size=626&ext=jpg&ga=GA1.1.205266656.1682997817&semt=ais"
          />
        </div>
        <div style={{ borderRadius: '30px', marginRight: '20px' }}>
          <img
            style={{ borderRadius: '10px' , height:"300px" }}
            src="https://img.freepik.com/free-photo/medium-shot-nurse-doctor-checking-patient_23-2148973496.jpg?size=626&ext=jpg&ga=GA1.2.205266656.1682997817&semt=sph"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default SliderPro;
