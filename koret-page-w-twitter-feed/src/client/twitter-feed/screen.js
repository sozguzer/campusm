import React from "react";
import {
  Container,
  VBox
} from "@ombiel/aek-lib";
import {Timeline} from 'react-twitter-widgets'; 
import styles from './styles.module.css';

export default class Screen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Container>
        <VBox>
        <img className={styles.heroImage} src="https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco/images/koret.jpg" alt="people swimming in the pool" />    
          <ul className={styles.listLinks}>
            <li>
              <a href="https://www.usfca.edu/koret/fitness/group-exercise/schedule" title="Group Exercise At-a-glance">
                Group Exercise At-a-glance2
                <img src="https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco/images/arrow.png" alt="arrow" className={styles.arrow} />
              </a>
            </li>
            <li>
              <a href="https://www.usfca.edu/" title="Daily Exercise Schedule">
                Daily Exercise Schedule
                <img src="https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco/images/arrow.png" alt="arrow" className={styles.arrow} />
              </a>
            </li>
            <li>
              <a href="https://www.usfca.edu/" title="Clubs & Intramural Sports Schedule">
                Clubs & Intramural Sports Schedule
                <img src="https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco/images/arrow.png" alt="arrow" className={styles.arrow} />
              </a>
            </li>
            <li>
              <a href="https://myusf.usfca.edu/koret/fitness" title="Fitness 101">
                Fitness 101
                <img src="https://portal-na.campusm.exlibrisgroup.com/assets/UniversityofSanFrancisco/UniversityofSanFrancisco/images/arrow.png" alt="arrow" className={styles.arrow} />
              </a>
            </li>
          </ul>  
          <br />
          
          <div className={styles.twitterHeader}>
            KORET TWITTER
          </div>
          <div className={styles.timeline}>
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'usfkoret'
              }}
              options={{
                height: '420',
                width: '90%'
              }}
            />
          </div>
        </VBox>
      </Container>
    );
  }
}

