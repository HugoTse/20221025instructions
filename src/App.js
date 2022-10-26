import '@aws-amplify/ui-react/styles.css';

import {
  withAuthenticator,
  ButtonGroup,
  Button,
  Heading,
  Image,
  View,
  Card,
  Grid,
  TextField,
  Alert,
  Flex,
  Badge,
  Text,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  ThemeProvider,
  Theme,
  SliderField,
  TextAreaField,
  SelectField,
  SwitchField,
  SearchField,
  useTheme,
  Divider,
  ToggleButton,
  TabItem,
  Tabs
} from "@aws-amplify/ui-react";

import React, {
  useState,
  useEffect,
} from "react";


function App() {
  return (
    <div className="App">
      <Heading level={1}>Ransomware Defender Instructions</Heading>
      <br/>

    <View>
      <Card variation="outlined">
        <Flex direction="row" alignItems="flex-start">
          <Image
            src="/step1.png"
            width="33%"
            variation="outlined"
          />
          <Flex
            direction="column"
            alignItems="flex-start"
          >
            <Flex>
              <Badge size="small" variation="info">
                Owner
              </Badge>
            </Flex>

            <Heading level={5}>
              Step 1) Create an account as an Owner.
            </Heading>

            <Text as="span">
              Click the link below to access the <i>Ransomware Defender</i> portal. In today's digital economy, your files are becoming ever more important. Hackers know this and they are working around the clock trying to get their hands on your files. By creating a <i>Ransomware Defender</i> online account, you can easily and seamlessly start protecting your files.
              <p>
              To create your <b>Owner</b> account, click the link below, select <i>Create Account</i>, and come up with a username and password. Then, click <b>Owner</b> to create your account.
              </p>
            </Text>
            <Button variation="link"><a href="https://main.d3j2r0ip7v3umd.amplifyapp.com/" target="_blank">Click here to access the <i>Ransomware Defender portal</i></a></Button>
          </Flex>
        </Flex>
      </Card>
    </View>

    <View>
      <Card variation="outlined">
        <Flex direction="row" alignItems="flex-start">
          <Image
            src="/step2.png"
            width="33%"
            variation="outlined"
          />
          <Flex
            direction="column"
            alignItems="flex-start"
          >
            <Flex>
              <Badge size="small" variation="info">
                Owner
              </Badge>
            </Flex>

            <Heading level={5}>
              Step 2) Copy your Organization ID and give it to your employees.
            </Heading>

            <Text as="span">
              Once you login with your newly created username and password, you will find your <b>Organization ID</b> towards the right-side of your screen. It is highlighted in green. Your Organization ID is automatically generated for you, and it is unique to your organization. Share the <b>Organization ID</b> with anyone in your organization that needs to create an account and back up files with the <i>Ransomware Defender</i>.
            </Text>
          </Flex>
        </Flex>
      </Card>
    </View>

    <View>
      <Card variation="outlined">
        <Flex direction="row" alignItems="flex-start">
          <Image
            src="/step3.png"
            width="33%"
            variation="outlined"
          />
          <Flex
            direction="column"
            alignItems="flex-start"
          >
            <Flex>
              <Badge size="small" variation="success">
                Administrator
              </Badge>
              <Badge size="small" variation="warning">
                User
              </Badge>
            </Flex>

            <Heading level={5}>
              Step 3) Create an account as an Administrator or User.
            </Heading>

            <Text as="span">
              To create an <b>Administrator</b> or <b>User</b> account, click the link below and come up with a username and password. Paste the <b>Organization ID</b> into the bottom input box. Then, click <b>Administrator</b> to create an <b>Administrator</b> account. Click <b>User</b> to create a <b>User</b> account.
            </Text>
            <Button variation="link"><a href="https://main.d3j2r0ip7v3umd.amplifyapp.com/" target="_blank">Click here to access the <i>Ransomware Defender portal</i></a></Button>
          </Flex>
        </Flex>
      </Card>
    </View>

    <View>
      <Card variation="outlined">
        <Flex direction="row" alignItems="flex-start">
          <Image
            src="/step4.png"
            width="33%"
            variation="outlined"
          />
          <Flex
            direction="column"
            alignItems="flex-start"
          >
            <Flex>
              <Badge size="small" variation="info">
                Owner
              </Badge>
              <Badge size="small" variation="success">
                Administrator
              </Badge>
              <Badge size="small" variation="warning">
                User
              </Badge>
            </Flex>

            <Heading level={5}>
              Step 4) Download and configure the Ransomware Defender.
            </Heading>

            <Text as="span">
              Click the link below to download the <i>Ransomware Defender</i> Python file. Your computer must be able to run Python. Copy and paste your desired directory onto Line 177. Then, add it to your computer's tasks on startup. For example, on Apple computers, open <i>Automator</i>, select <u>Get Specified Finder Items</u>, select the <i>ransomwaredefender.py</i> file, and <u>Open Finder Items</u> with your choice of code editor. To make sure the <i>Ransomware Defender</i> runs on startup, save and add the newly created <i>Automator</i> file to <u>Users & Groups/Login items</u>. Remember to click run, so that the <i>Ransomware Defender</i> backs up your files.
            </Text>
            <Button variation="link"><a href="/ransomwaredefender.py" target="_blank">Click here to download the <i>Ransomware Defender</i> file</a></Button>

            <p>
              On Linux-based systems, you can run <code>[shasum -a 256 ransomwaredefender.py]</code> to verify that you downloaded the original file. On Windows systems, run <code>[Get-fileHash ransomwaredefender.py]</code>.
          
              The SHA256 checksum should be identical to the following: <code>de906d5c823184b7f1fd1e7c22751e018ac256732275ba06d1cdf73acad69b17</code>
            </p>
          </Flex>
        </Flex>
      </Card>
    </View>

    <br/>
    <br/>

    </div>

    
  );
}

export default App;
