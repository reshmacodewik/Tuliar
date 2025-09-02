import React from "react";
import { View, Text, Image } from "react-native";
import { useResponsive } from "../Responsive/useResponsive";
import styles from "../style/homestyles";

const FeedPost = () => {
  const { wp, hp } = useResponsive();
  const s = styles(wp, hp); // ✅ store once

  const feedPosts = [
    {
      id: "1",
      user: "Acnxk ojkb lc",
      avatar: require("../../src/Theme/assets/image/ellispe.png"),
      content:
        "Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent nec quam et hac. Duis et turpis nisl arcu amet parturient sodales lorem nunc.",
      likes: "20k",
      comments: "10k",
      shares: "5k",
    },
    {
      id: "2",
      user: "Acnxk ojkb lc",
      avatar: require("../../src/Theme/assets/image/ellispe.png"),
      content:
        "Lorem ipsum dolor sit amet consectetur. Molestie purus eu volutpat praesent nec quam et hac. Duis et turpis nisl arcu amet parturient sodales lorem nunc.",
      likes: "20k",
      comments: "10k",
      shares: "5k",
    },
  ];

  return (
    <View>
      {feedPosts.map((post) => (
        <View key={post.id} style={s.feedCard}>
          {/* Header */}
          <View style={s.feedHeader}>
            <Image source={post.avatar} style={s.feedAvatar} />
            <Text style={s.feedUser}>{post.user}</Text>
          </View>

          {/* Content */}
          <Text style={s.feedText}>{post.content}</Text>

          {/* Stats row */}
          <View style={s.feedStats}>
            <View style={s.statItem}>
              <Image
                source={require("../../src/Theme/assets/image/heart.png")}
                style={s.feedicon}
              />
              <Text style={s.statText}>{post.likes}</Text>
            </View>

            <View style={s.statItem}>
              <Image
                source={require("../../src/Theme/assets/image/feedchat.png")}
                style={s.feedicon}
              />
              <Text style={s.statText}>{post.comments}</Text>
            </View>

            <View style={s.statItem}>
              <Image
                source={require("../../src/Theme/assets/image/send.png")}
                style={s.feedicon}
              />
              <Text style={s.statText}>{post.shares}</Text>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default FeedPost;
