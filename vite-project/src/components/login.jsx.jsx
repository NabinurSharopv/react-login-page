import { Card, Form, Input, Button, Checkbox, Typography, Divider, Row, Col } from "antd";
import { MailOutlined, LockOutlined, EyeOutlined, EyeInvisibleOutlined, FacebookOutlined, GoogleOutlined, AppleOutlined } from "@ant-design/icons";
import img from "../assets/Rectangle 20.png"
const { Title, Text, Link } = Typography;

export default function LoginPage() {
  return (
    <div style={{  
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      
      <Row gutter={[48, 48]} style={{ width: '100%', }}>
        <Col xs={24} md={12} lg={10}>
          <Card 
            style={{ 
              borderRadius: '20px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              border: 'none'
            }}
          >
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              marginBottom: '60px',
            }}>
              <Title style={{ 
                color: '#515DEF', 
                margin: 0, 
                fontSize: '32px',
                fontWeight: 'bold'
              }}>
                Your Logo
              </Title>
            </div>
            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
              <Title level={1} style={{ 
                fontSize: '36px', 
                fontWeight: 700, 
                color: '#2D3748',
                marginBottom: '8px'
              }}>
                Login
              </Title>
              <Text style={{ 
                fontSize: '16px', 
                color: '#718096',
                fontWeight: 500
              }}>
                Login to access your travelwise account
              </Text>
            </div>
            <Form layout="vertical" size="large">
              <Form.Item
                label={
                  <Text strong style={{ color: '#2D3748', fontSize: '14px' }}>
                    Email
                  </Text>
                }
              >
                <Input 
                type="email"
                  prefix={<MailOutlined style={{ color: '#515DEF' }} />}
                  placeholder="john.doe@gmail.com"
                  style={{ 
                    height: '52px',
                    borderRadius: '12px',
                    border: '2px solid #E2E8F0'
                  }}
                />
              </Form.Item>
              <Form.Item
                label={
                  <Text strong style={{ color: '#2D3748', fontSize: '14px' }}>
                    Password
                  </Text>
                }
              >
                <Input.Password 
                  prefix={<LockOutlined style={{ color: '#515DEF' }} />}
                  placeholder="•••••••••••••••••••••••••"
                  iconRender={(visible) => 
                    visible ? 
                    <EyeOutlined style={{ color: '#515DEF' }} /> : 
                    <EyeInvisibleOutlined style={{ color: '#A0AEC0' }} />
                  }
                  style={{ 
                    height: '52px',
                    borderRadius: '12px',
                    border: '2px solid #E2E8F0'
                  }}
                />
              </Form.Item>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                marginBottom: '32px'
              }}>
                <Checkbox style={{ color: '#4A5568', fontWeight: 500 }}>
                  Remember me
                </Checkbox>
                
                <Link 
                  style={{ 
                    color: '#FF8682',
                    fontWeight: 600,
                    fontSize: '14px'
                  }}
                >
                  Forgot Password?
                </Link>
              </div>
              <Button 
                type="primary" 
                block
                style={{ 
                  height: '52px',
                  background: 'blue',
                  border: 'none',
                  borderRadius: '12px',
                  fontSize: '16px',
                  fontWeight: 600,
                  marginBottom: '24px'
                }}
              >
                Login
              </Button>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <Text style={{ fontSize: '14px', color: '#718096', fontWeight: 500 }}>
                  Don't have an account?{" "}
                  <Link 
                    style={{ 
                      color: '#515DEF',
                      fontWeight: 600
                    }}
                  >
                    Sign up
                  </Link>
                </Text>
              </div>
              <Divider plain>
                <Text style={{ color: '#A0AEC0', fontSize: '14px', fontWeight: 500 }}>
                  Or login with
                </Text>
              </Divider>
              <Row gutter={12}>
                <Col span={8}>
                  <Button 
                    block 
                    style={{ 
                      height: '52px',
                      border: '2px solid #E2E8F0',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    icon={<FacebookOutlined style={{ color: '#1877F2', fontSize: '30px' }} />}
                  />
                </Col>
                <Col span={8}>
                  <Button 
                    block 
                    style={{ 
                      height: '52px',
                      border: '2px solid #E2E8F0',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    icon={<GoogleOutlined style={{ color: '#DB4437', fontSize: '30px' }} />}
                  />
                </Col>
                <Col span={8}>
                  <Button 
                    block 
                    style={{ 
                      height: '52px',
                      border: '2px solid #E2E8F0',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    icon={<AppleOutlined style={{ color: '#000000', fontSize: '30px' }} />}
                  />
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>

        <Col xs={24} md={12} lg={14}>
         <img src={img} alt="" />
        </Col>
      </Row>
    </div>
  );
}