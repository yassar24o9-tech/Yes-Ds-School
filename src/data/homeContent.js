import campusAssembly from '../assets/images/school/campus/campus-assembly.jpg'
import campusEntrance from '../assets/images/school/campus/campus-entrance.jpg'
import campusExterior from '../assets/images/school/campus/campus-exterior.jpg'
import classroomActivity from '../assets/images/school/students/classroom-activity.jpg'
import classroomActivityTwo from '../assets/images/school/students/classroom-activity-2.jpg'
import classroomGathering from '../assets/images/school/students/classroom-gathering.jpg'
import classroomInterior from '../assets/images/school/students/classroom-interior.jpg'
import scienceActivity from '../assets/images/school/students/science-activity.jpg'
import outdoorGroupActivity from '../assets/images/school/events/outdoor-group-activity.jpg'
import outdoorSchoolActivity from '../assets/images/school/events/outdoor-school-activity.jpg'
import schoolCommunityActivity from '../assets/images/school/events/school-community-activity.jpg'
import schoolPerformance from '../assets/images/school/events/school-performance.jpg'
import studentPerformance from '../assets/images/school/events/student-performance.jpg'
import studentPresentation from '../assets/images/school/events/student-presentation.jpg'
import studentStageNineteen from '../assets/images/school/events/student-stage-19.jpg'
import studentStageTwenty from '../assets/images/school/events/student-stage-20.jpg'
import studentStageTwentyOne from '../assets/images/school/events/student-stage-21.jpg'
import studentStageTwentyThree from '../assets/images/school/events/student-stage-23.jpg'
import studentStageTwentyFive from '../assets/images/school/events/student-stage-25.jpg'
import studentStageTwentySix from '../assets/images/school/events/student-stage-26.jpg'
import outdoorActivityTwentyEight from '../assets/images/school/gallery/outdoor-activity-28.jpg'
import schoolGatheringTwentyNine from '../assets/images/school/gallery/school-gathering-29.jpg'
import outdoorActivityThirty from '../assets/images/school/gallery/outdoor-activity-30.jpg'
import outdoorActivityThirtyOne from '../assets/images/school/gallery/outdoor-activity-31.jpg'
import outdoorActivityThirtyFour from '../assets/images/school/gallery/outdoor-activity-34.jpg'
import outdoorActivityThirtyFive from '../assets/images/school/gallery/outdoor-activity-35.jpg'
import studentActivityThirtySeven from '../assets/images/school/gallery/student-activity-37.jpg'
import outdoorActivityThirtyNine from '../assets/images/school/gallery/outdoor-activity-39.jpg'

const portrait = { width: 720, height: 1280 }

export const schoolPhotos = {
  campusAssembly: {
    src: campusAssembly,
    width: 810,
    height: 370,
    alt: 'YES DS High School building with students gathered in front.',
  },
  campusEntrance: {
    src: campusEntrance,
    ...portrait,
    alt: 'Exterior of YES DS High School.',
  },
  campusExterior: {
    src: campusExterior,
    ...portrait,
    alt: 'The front exterior of a school building.',
  },
  classroomActivity: {
    src: classroomActivity,
    ...portrait,
    alt: 'Students seated together in a classroom.',
  },
  classroomActivityTwo: {
    src: classroomActivityTwo,
    ...portrait,
    alt: 'Students gathered for a classroom activity.',
  },
  classroomGathering: {
    src: classroomGathering,
    ...portrait,
    alt: 'Students seated together during a classroom gathering.',
  },
  classroomInterior: {
    src: classroomInterior,
    ...portrait,
    alt: 'Desks arranged inside a classroom.',
  },
  scienceActivity: {
    src: scienceActivity,
    ...portrait,
    alt: 'Students taking part in a science activity.',
  },
  studentPresentation: {
    src: studentPresentation,
    ...portrait,
    alt: 'A student speaking on stage.',
  },
  schoolPerformance: {
    src: schoolPerformance,
    ...portrait,
    alt: 'A student presenting at a school event.',
  },
  studentPerformance: {
    src: studentPerformance,
    ...portrait,
    alt: 'A student speaking at a microphone on stage.',
  },
  outdoorSchoolActivity: {
    src: outdoorSchoolActivity,
    ...portrait,
    alt: 'Students gathered outdoors near a flag.',
  },
  outdoorGroupActivity: {
    src: outdoorGroupActivity,
    ...portrait,
    alt: 'Students and adults gathered outdoors.',
  },
  schoolCommunityActivity: {
    src: schoolCommunityActivity,
    ...portrait,
    alt: 'Students participating in an outdoor activity.',
  },
  studentStageNineteen: {
    src: studentStageNineteen,
    ...portrait,
    alt: 'A student speaking on stage.',
  },
  studentStageTwenty: {
    src: studentStageTwenty,
    ...portrait,
    alt: 'A student giving a presentation on stage.',
  },
  studentStageTwentyOne: {
    src: studentStageTwentyOne,
    ...portrait,
    alt: 'A student speaking at a microphone.',
  },
  studentStageTwentyThree: {
    src: studentStageTwentyThree,
    ...portrait,
    alt: 'A student speaking on stage.',
  },
  studentStageTwentyFive: {
    src: studentStageTwentyFive,
    ...portrait,
    alt: 'A student speaking at a microphone.',
  },
  studentStageTwentySix: {
    src: studentStageTwentySix,
    ...portrait,
    alt: 'A student speaking at a lectern.',
  },
  outdoorActivityTwentyEight: {
    src: outdoorActivityTwentyEight,
    ...portrait,
    alt: 'People standing together in a mountain landscape.',
  },
  schoolGatheringTwentyNine: {
    src: schoolGatheringTwentyNine,
    ...portrait,
    alt: 'People seated in rows at a school gathering.',
  },
  outdoorActivityThirty: {
    src: outdoorActivityThirty,
    ...portrait,
    alt: 'A person standing outdoors in a mountain landscape.',
  },
  outdoorActivityThirtyOne: {
    src: outdoorActivityThirtyOne,
    ...portrait,
    alt: 'People walking in a mountain landscape.',
  },
  outdoorActivityThirtyFour: {
    src: outdoorActivityThirtyFour,
    ...portrait,
    alt: 'A group gathered outdoors in a mountain landscape.',
  },
  outdoorActivityThirtyFive: {
    src: outdoorActivityThirtyFive,
    ...portrait,
    alt: 'People seated outdoors in a mountain landscape.',
  },
  studentActivityThirtySeven: {
    src: studentActivityThirtySeven,
    ...portrait,
    alt: 'Students standing beside a display.',
  },
  outdoorActivityThirtyNine: {
    src: outdoorActivityThirtyNine,
    ...portrait,
    alt: 'Two people in an outdoor setting.',
  },
}

export const schoolIntroduction = {
  introduction:
    'YES DS High School is located in Dhanore / Kheora, Rajouri, Jammu and Kashmir. The photographs on this site offer a visual introduction to the campus and school activities.',
  image: schoolPhotos.campusEntrance.src,
  imageWidth: schoolPhotos.campusEntrance.width,
  imageHeight: schoolPhotos.campusEntrance.height,
}

export const learningPhotos = [
  {
    title: 'Classroom learning',
    description: 'Students gathered in a classroom.',
    image: schoolPhotos.classroomActivity,
  },
  {
    title: 'Science activity',
    description: 'Students taking part in a science activity.',
    image: schoolPhotos.scienceActivity,
  },
]

export const campusSpaces = [
  {
    title: 'Campus exterior',
    image: schoolPhotos.campusEntrance,
  },
  {
    title: 'A classroom',
    image: schoolPhotos.classroomInterior,
  },
]

export const activityPhotos = [
  {
    title: 'Student presentation',
    image: schoolPhotos.studentPresentation,
  },
  {
    title: 'Student performance',
    image: schoolPhotos.studentPerformance,
  },
  {
    title: 'Students outdoors',
    image: schoolPhotos.outdoorSchoolActivity,
  },
]

const galleryImage = (image, label, category) => ({ ...image, label, category })

export const galleryImages = [
  galleryImage(schoolPhotos.campusAssembly, 'Campus gathering', 'Campus'),
  galleryImage(schoolPhotos.classroomInterior, 'Classroom interior', 'Learning'),
  galleryImage(schoolPhotos.scienceActivity, 'Science activity', 'Learning'),
  galleryImage(schoolPhotos.studentPresentation, 'Student presentation', 'Student activities'),
  galleryImage(schoolPhotos.studentPerformance, 'Student performance', 'Student activities'),
  galleryImage(schoolPhotos.outdoorSchoolActivity, 'Students outdoors', 'Student activities'),
  galleryImage(schoolPhotos.outdoorGroupActivity, 'Outdoor gathering', 'Student activities'),
  galleryImage(schoolPhotos.schoolCommunityActivity, 'Outdoor activity', 'Student activities'),
  galleryImage(schoolPhotos.schoolPerformance, 'Student presentation', 'Student activities'),
  galleryImage(schoolPhotos.campusExterior, 'Campus exterior', 'Campus'),
  galleryImage(schoolPhotos.classroomGathering, 'Classroom gathering', 'Learning'),
  galleryImage(schoolPhotos.classroomActivityTwo, 'Classroom activity', 'Learning'),
  galleryImage(schoolPhotos.studentStageNineteen, 'Student presentation', 'Student activities'),
  galleryImage(schoolPhotos.studentStageTwenty, 'Student presentation', 'Student activities'),
  galleryImage(schoolPhotos.studentStageTwentyOne, 'Student presentation', 'Student activities'),
  galleryImage(schoolPhotos.studentStageTwentyThree, 'Student presentation', 'Student activities'),
  galleryImage(schoolPhotos.studentStageTwentyFive, 'Student presentation', 'Student activities'),
  galleryImage(schoolPhotos.studentStageTwentySix, 'Student presentation', 'Student activities'),
  galleryImage(schoolPhotos.outdoorActivityTwentyEight, 'Outdoor scene', 'Student activities'),
  galleryImage(schoolPhotos.schoolGatheringTwentyNine, 'School gathering', 'Student activities'),
  galleryImage(schoolPhotos.outdoorActivityThirty, 'Outdoor scene', 'Student activities'),
  galleryImage(schoolPhotos.outdoorActivityThirtyOne, 'Outdoor scene', 'Student activities'),
  galleryImage(schoolPhotos.outdoorActivityThirtyFour, 'Outdoor scene', 'Student activities'),
  galleryImage(schoolPhotos.outdoorActivityThirtyFive, 'Outdoor scene', 'Student activities'),
  galleryImage(schoolPhotos.studentActivityThirtySeven, 'Student activity', 'Student activities'),
  galleryImage(schoolPhotos.outdoorActivityThirtyNine, 'Outdoor activity', 'Student activities'),
]

export const schoolContact = {
  name: 'YES DS High School',
  location: 'Dhanore / Kheora, Rajouri, Jammu and Kashmir',
}
