import React from "react";
import { StyleSheet } from "react-native";

import { Card, Paragraph } from "react-native-paper";

const HomeCard = ({ titolo, img, comunicazione }) => {
  return (
    <Card>
      <Card.Title title={titolo} titleStyle={styles.title} />
      <Card.Cover
        source={{
          uri:
            img +
            "#" +
            `${Math.random()
              .toString(36)
              .substring(2, 15) +
              Math.random()
                .toString(36)
                .substring(2, 15)}`
        }}
        style={styles.image}
      />
      <Card.Content style={{ marginTop: 10 }}>
        <Paragraph>{comunicazione}</Paragraph>
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center"
  },
  image: {}
});

export default HomeCard;
