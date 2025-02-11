import React from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import { Divider } from "primereact/divider";

export const CardLove = () => {
  return (
    <div
      className="flex justify-content-center align-items-end "
      style={{ alignContent: "center" }}
    > 
    
    <Card style={{ borderRadius: '12px', overflow: 'hidden' }}>
         <div
        className="flex flex-column md:flex-row "
        style={{
          backgroundColor: "#fff0f0",
          maxWidth: "1050px",
          maxHeight: "670px",
        }}
      >
        {/* Columna 1 */}
        <div
          className="flex justify-content-start align-items-between"
          style={{ backgroundColor: "#fff3e9" }}
        >
          <div className="col-5 md:col-4 p-3 text-white">
            <Image src="../images/lateral2.png" />
            <Image src="../images/qr.png" height="200" />
          </div>
        </div>

        {/* Columna 2 con borde de iconos */}
        <div
          className="col-12 md:col-8 p-3 text-white relative"
          style={{ backgroundColor: "#fff0f0", Width: "1050px" }}
        >
          {/* Iconos alrededor del contenedor */}
          {/* Iconos en la parte superior */}
          <div className="flex justify-content-between absolute top-0 left-0 right-0 p-2">
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
          </div>

          {/* Iconos en los lados izquierdo y derecho */}
          <div className="flex flex-column justify-content-between absolute top-0 bottom-0 left-0 p-2">
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
          </div>
          <div className="flex flex-column justify-content-between absolute top-0 bottom-0 right-0 p-2">
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
          </div>

          {/* Iconos en la parte inferior */}
          <div className="flex justify-content-between absolute bottom-0 left-0 right-0 p-2">
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
            <i className="pi pi-heart-fill text-red-500"></i>
          </div>

          {/* Contenido de la columna 2 */}
          <div
            className="flex justify-content-end"
            style={{ padding: "0", margin: "0" }}
          >
            <Image
              className="border-round"
              src="../images/lateral1.png"
              width="150"
            />
          </div>

          <div
            className="flex justify-content-center"
            style={{ padding: "0", margin: "0" }}
          >
            <h1
              style={{ fontFamily: "Great Vibes, cursive", color: "InfoText" }}
            >
              Fanny Sosa Vela
            </h1>
          </div>

          <div className="mb-3 p-3 ">
            {/* <Divider align="horizontal" /> */}

            <p
              style={{ fontFamily: "Great Vibes, cursive", color: "InfoText" }}
            >
              Amor mío,
               No sé cómo comenzar, lo único que tengo claro es que
              este tiempo a tu lado ha sido lo mejor que me ha pasado. Eres la
              mujer que completa mi corazón. He dicho estas palabras muchas
              veces, pero nunca dejan de ser ciertas: la felicidad que siento
              contigo es infinita. Eres el amor de mi vida.{" "}
            </p>

            <Divider align="horizontal" />

            <p
              style={{ fontFamily: "Great Vibes, cursive", color: "InfoText" }}
            >
            Eres la historia más hermosa que la vida ha escrito para mí.
            </p>

            <Divider align="horizontal" />

            <p
              style={{ fontFamily: "Great Vibes, cursive", color: "InfoText" }}
            >
              No sé qué nos deparará el futuro, pero lo único que sé es que quiero vivirlo a tu lado. Te amaré por siempre.
            </p>
          </div>

          {/* Fila  final */}
          <div className="flex justify-content-end">
            <p
              style={{ fontFamily: "Great Vibes, cursive", color: "GrayText" }}
            >
              Reynaldo Mejia Rivera
            </p>
          </div>
        </div>
      </div> 
    </Card>
    
    </div>
  );
};
