import React, { Suspense } from "react";

export const metadata = {
  title: "Maps",
  description: "This is a Maps Page from Luxury Rent Car",
};

function Maps() {
  return (
    <div className="h-[calc(100vh-20vh)] mx-32">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.9536539920093!2d106.80483482674909!3d-6.275916908416823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f19244857d97%3A0x240b2d9e098f2954!2sJl.%20Anggur%20III%20No.3%2C%20RT.9%2FRW.3%2C%20Cipete%20Sel.%2C%20Kec.%20Cilandak%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012410!5e0!3m2!1sen!2sid!4v1688530893620!5m2!1sen!2sid"
        width="800"
        height="600"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="w-full h-full rounded-2xl"
      ></iframe>
    </div>
  );
}

export default Maps;
