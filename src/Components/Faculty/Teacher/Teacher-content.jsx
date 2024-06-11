import React, { useState, useEffect } from 'react';
import { Layout, Card, Row, Col, Typography } from 'antd';
import userImg from '../../../assets/user.png'; // Assuming user.png is located in the assets folder
import socketIOClient from 'socket.io-client';

const arduinoServerUrl = 'http://localhost:2727';
const studentInfoServerUrl = 'http://localhost:2526';
const { Content: AntdContent } = Layout;
const { Title, Text } = Typography;

const TeacherContent = ({ borderRadiusLG }) => {
  const [currentTagData, setCurrentTagData] = useState('');
  const [previousTagData, setPreviousTagData] = useState('');
  const [currentStudentInfo, setCurrentStudentInfo] = useState(null);
  const [previousStudentInfo, setPreviousStudentInfo] = useState(null);
  const [currentTime, setCurrentTime] = useState('');
  const [previousTime, setPreviousTime] = useState('');

  useEffect(() => {
    const socket = socketIOClient(arduinoServerUrl);

    socket.on('tagData', receivedData => {
      // Check if the received tagData matches any tagValue in the student info data
      isValidTagData(receivedData).then((isValid) => {
        if (isValid) {
          setPreviousTagData(currentTagData); // Move current data to previous
          setPreviousTime(currentTime); // Move current time to previous
          setCurrentTagData(receivedData);
          setCurrentTime(new Date().toLocaleString()); // Update current time when tagData changes
        }
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [currentTagData, currentTime]);

  const isValidTagData = async (tagData) => {
    // Fetch student info data from the server
    try {
      const response = await fetch(`${studentInfoServerUrl}/studentinfo`);
      const data = await response.json();

      // Check if the tagData matches any tagValue in the student info data
      const isValid = data.some(student => student.tagValue === tagData);
      return isValid;
    } catch (error) {
      console.error('Error fetching student information:', error);
      return false;
    }
  };

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        if (!currentTagData) return; // If tagData is empty, exit early

        // Fetch student info data from the server
        const response = await fetch(`${studentInfoServerUrl}/studentinfo`);
        const data = await response.json();

        // Find the student whose tagValue matches currentTagData
        const matchedStudent = data.find(student => student.tagValue === currentTagData);

        if (matchedStudent) {
          setCurrentStudentInfo(matchedStudent);
        } else {
          setCurrentStudentInfo(null);
        }
      } catch (error) {
        console.error('Error fetching student information:', error);
      }
    };

    fetchStudentInfo();
  }, [currentTagData]);

  useEffect(() => {
    const fetchStudentInfo = async () => {
      try {
        if (!previousTagData) return; // If previousTagData is empty, exit early

        // Fetch student info data from the server
        const response = await fetch(`${studentInfoServerUrl}/studentinfo`);
        const data = await response.json();

        // Find the student whose tagValue matches previousTagData
        const matchedStudent = data.find(student => student.tagValue === previousTagData);

        if (matchedStudent) {
          setPreviousStudentInfo(matchedStudent);
        } else {
          setPreviousStudentInfo(null);
        }
      } catch (error) {
        console.error('Error fetching student information:', error);
      }
    };

    fetchStudentInfo();
  }, [previousTagData]);

  return (
    <AntdContent className="shadow-md"
      style={{
        margin: '24px 16px',
        padding: 24,
        minHeight: 280,
        background: "rgb(252, 252, 252)",
        borderRadius: borderRadiusLG,
      }}
    >
      <div className="card-body bg-light">
        <Title level={3}>Dashboard</Title>

        <Row gutter={[16, 16]}>
          {/* Main content column */}
          <Col xs={{ span: 24 }} sm={{ span: 16 }}>
            <Card className="shadow-md">
              <Row gutter={[16, 16]}>
                <Col span={6}>
                  <img src={userImg} alt="Profile" className="m-4 mt-4.5" style={{ width: '100%', maxWidth: '6.5rem' }} />
                </Col>
                <Col span={18}>
                  <div className="card-body mt-8">
                    {currentStudentInfo && (
                      <React.Fragment>
                        <div className="mb-2">
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ maxWidth: '100%' }}>TUP ID: </Text>
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" strong style={{ maxWidth: '100%' }}>{currentStudentInfo.studentInfo_tuptId}</Text>
                        </div>
                        <div className="mb-2">
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ maxWidth: '100%' }}>Name: </Text>
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" strong style={{ maxWidth: '100%' }}>{`${currentStudentInfo.studentInfo_first_name} ${currentStudentInfo.studentInfo_middle_name} ${currentStudentInfo.studentInfo_last_name}`}</Text>
                        </div>
                        <div className="mb-2">
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ maxWidth: '100%' }}>Course: </Text>
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" strong style={{ maxWidth: '100%' }}>{currentStudentInfo.studentInfo_course}</Text>
                        </div>
                        <div className="mb-2">
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ maxWidth: '100%' }}>Section: </Text>
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" strong style={{ maxWidth: '100%' }}>{currentStudentInfo.studentInfo_section}</Text>
                        </div>
                        <div className="mb-2">
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ maxWidth: '100%' }}>Time: </Text>
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" strong style={{ maxWidth: '100%' }}>{currentTime}</Text>
                        </div>
                      </React.Fragment>
                    )}

                    {/* Always render labels */}
                    {!currentStudentInfo && (
                      <React.Fragment>
                        <div className="mb-2">
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ maxWidth: '100%' }}>TUP ID: </Text>
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" strong style={{ maxWidth: '100%' }}></Text>
                        </div>
                        <div className="mb-2">
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ maxWidth: '100%' }}>Name: </Text>
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" strong style={{ maxWidth: '100%' }}></Text>
                        </div>
                        <div className="mb-2">
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ maxWidth: '100%' }}>Course: </Text>
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" strong style={{ maxWidth: '100%' }}></Text>
                        </div>
                        <div className="mb-2">
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ maxWidth: '100%' }}>Section: </Text>
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" strong style={{ maxWidth: '100%' }}></Text>
                        </div>
                        <div className="mb-2">
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" style={{ maxWidth: '100%' }}>Time: </Text>
                          <Text className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl" strong style={{ maxWidth: '100%' }}></Text>
                        </div>
                      </React.Fragment>
                    )}
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>

          {/* Secondary content column */}
          <Col xs={{ span: 24 }} sm={{ span: 8 }}>
            <Card className="shadow-md">
              <Row justify="center">
                <Col span={6}>
                  <img src={userImg} alt="Profile" className="mt-2 mb-5 object-contain w-25 h-25" />
                </Col>
              </Row>
              <div className="card-body">
                <div>
                  <Text>TUP ID: </Text><Text strong>{previousStudentInfo ? previousStudentInfo.studentInfo_tuptId : ''}</Text><br />
                  <Text>Name: </Text><Text strong>{previousStudentInfo ? `${previousStudentInfo.studentInfo_first_name} ${previousStudentInfo.studentInfo_middle_name} ${previousStudentInfo.studentInfo_last_name}` : ''}</Text><br />
                  <Text>Course: </Text><Text strong>{previousStudentInfo ? previousStudentInfo.studentInfo_course : ''}</Text><br />
                  <Text>Section: </Text><Text strong>{previousStudentInfo ? previousStudentInfo.studentInfo_section : ''}</Text><br />
                  <Text>Time: </Text><Text strong>{previousTime}</Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </AntdContent>
  );
};

export default TeacherContent;