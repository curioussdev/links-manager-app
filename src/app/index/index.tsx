import { MaterialIcons } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";

import { Category } from "@/components/category";
import { colors } from "@/styles/colors";
import { categories } from "@/utils/categories";
import { styles } from "./styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("@/assets/logo.png")} style={styles.logo} />

        <TouchableOpacity>
          <MaterialIcons name="add" size={32} color={colors.green[300]} />
        </TouchableOpacity>
      </View>

      <Category
        name={categories[3].name}
        icon={categories[3].icon}
        isSelected
      />
      <Category name="site" icon="language" isSelected={false} />
      <Category name="Vídeo" icon="movie" isSelected={false} />
    </View>
  );
}
