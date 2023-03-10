import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import { useSelector } from "react-redux";
import tw from "twrnc";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAPS_KEY } from "@env";

export default function Map() {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  useEffect(() => {
    console.log(destination)
    if (!origin || !destination) return;
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"],
    { edgePadding: {
      top: 50,
      right: 50,
      left: 50,
      bottom: 50,
      aimated: true,
    },
    });
  }, [origin, destination]);
  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey= {GOOGLE_MAPS_KEY}
          strokeWidth={3}
          strokeColors="hotpink"
        />
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="origin"
          description={origin.description}
          identifier="origin"
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({});
