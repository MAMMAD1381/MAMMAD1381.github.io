import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Arial',
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333333',
  },
  content: {
    fontSize: 12,
    color: '#666666',
  },
});

const ResumePDF = ({ name, email, phone, education, university, graduation, experience, company, dates }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Personal Information</Text>
        <Text style={styles.content}>Name: {name}</Text>
        <Text style={styles.content}>Email: {email}</Text>
        <Text style={styles.content}>Phone: {phone}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        <Text style={styles.content}>{education}</Text>
        <Text style={styles.content}>{university}, Graduation: {graduation}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        <Text style={styles.content}>{experience}</Text>
        <Text style={styles.content}>{company}, {dates}</Text>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
