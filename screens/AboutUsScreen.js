import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React from "react";

import Header from "../components/Header";

const AboutUsScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#F7F0FC", height: 1000 }}>
      <View>
        <Header title={"About Us"} />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            margin: 10,
            backgroundColor: "#FFFFFF",
            height: 700,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#AB83A1",
            padding: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_700Bold",
              fontSize: 20,
              marginTop: -20,
              marginBottom: 10,
              textAlign: "center",
            }}
          >
            AWEERA - Bridal, Hair & Beauty
          </Text>

          <Text style={{ fontFamily: "Poppins_300Light", textAlign: "center" }}>
            Aweera Hair & Beauty is a renown name in the field of Hair & Beauty
            simply because of the exceptional service delivery. We, at Aweera
            strongly believe in working live with the clients. A pure mix of
            experience, state of the art technology, newest techniques in the
            field and being truthful to the clients has paved our path to
            success. Our pure belief in not owning branches simply because the
            maestro, Mr. Asanka Weerasekara believes in being present at any and
            every job undertaken by Aweera Hair & Beauty, can be cited as our
            uniqueness. Not to forget, the truly amazing clientele that has
            always believed in us, walked with us and had forever been loyal to
            us, is our biggest strength. Our best form of marketing throughout
            our journey, Word of Mouth, has also been thanks to these wonderful
            souls. We move forward, with our heads held up high with a sole
            motto, Exceptional service at a reasonable rate. AWEERA is
            considered as an upscale full-service beauty salon offering a wide
            range of services including hair cuts, hair setting, hair
            treatments, hair coloring, face & body treatments, waxing,
            threading, saree draping, make-up, pedicure, manicure & nail care.
            The use of the highest quality cosmetics and their speciality in
            hair treatments makes them distinctively unique in the industry.
            While handling your hair firmly and very carefully AWEERA gives an
            entirely new look to your hair.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({});
