import React, { useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { Navigation } from "react-native-navigation";

export const Detail = ({ componentId }) => {
  useEffect(() => {
    return () => alert('[Detail] unmount')
  }, [])

  navigateBack = async () => {
    try {
      console.log('[Navigation.pop] started')
      await Navigation.pop(componentId)
      alert('[Navigation.pop] resolved')
    } catch (popError) {
      console.log('[Navigation.pop] rejected')
    }
  }

  return (
    <View>
      <Text>Navigating back using Navigation.pop while the spinner is being animated won't trigger componentWillUnmount</Text>
      <TouchableOpacity style={{padding: 20, borderWidth: 1}} onPress={navigateBack}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  )
}