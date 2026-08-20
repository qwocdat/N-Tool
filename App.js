import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [islandExpanded, setIslandExpanded] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* 1. DYNAMIC ISLAND */}
      <TouchableOpacity 
        activeOpacity={0.8}
        onPress={() => setIslandExpanded(!islandExpanded)}
        style={[styles.dynamicIsland, islandExpanded && styles.dynamicIslandExpanded]}
      >
        {!islandExpanded ? (
          <View style={styles.islandContentSmall}>
            <View style={styles.dot} />
            <Text style={styles.islandText}>N Tool Active</Text>
          </View>
        ) : (
          <View style={styles.islandContentLarge}>
            <Text style={styles.islandTitle}>N Tool - HyperOS Custom</Text>
            <Text style={styles.islandSub}>Dynamic Island & Liquid Glass</Text>
          </View>
        )}
      </TouchableOpacity>

      {/* 2. LIQUID GLASS CONTAINER */}
      <View style={styles.glassCard}>
        <Text style={styles.cardTitle}>N Tool System</Text>
        <Text style={styles.cardSub}>Trải nghiệm giao diện iOS trên Xiaomi</Text>
      </View>

      {/* 3. SIMULATED iOS KEYBOARD PREVIEW */}
      <View style={styles.keyboardPreview}>
        <Text style={styles.keyText}>Giao diện Bàn phím iOS (Liquid Glass)</Text>
        <View style={styles.keyRow}>
          {['Q','W','E','R','T','Y','U','I','O','P'].map((k) => (
            <View key={k} style={styles.key}><Text style={styles.keyChar}>{k}</Text></View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f11', alignItems: 'center' },
  dynamicIsland: {
    backgroundColor: '#000',
    borderRadius: 25,
    marginTop: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    minWidth: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#333',
  },
  dynamicIslandExpanded: { width: '90%', height: 100, borderRadius: 30 },
  islandContentSmall: { flexDirection: 'row', alignItems: 'center' },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#0d6efd', marginRight: 8 },
  islandText: { color: '#fff', fontSize: 13, fontWeight: '600' },
  islandContentLarge: { alignItems: 'center' },
  islandTitle: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  islandSub: { color: '#aaa', fontSize: 12, marginTop: 5 },
  glassCard: {
    marginTop: 40,
    width: '90%',
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.15)',
  },
  cardTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  cardSub: { color: '#ccc', marginTop: 5 },
  keyboardPreview: { marginTop: 'auto', marginBottom: 20, width: '100%', alignItems: 'center' },
  keyText: { color: '#888', marginBottom: 10, fontSize: 12 },
  keyRow: { flexDirection: 'row', justifyContent: 'center' },
  key: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingVertical: 10,
    paddingHorizontal: 8,
    margin: 2,
    borderRadius: 6,
  },
  keyChar: { color: '#fff', fontWeight: '600' },
});
