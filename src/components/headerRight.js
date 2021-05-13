import React, { Fragment } from 'react'
import { BellOutlined } from '@ant-design/icons'
import { Menu, Avatar, Badge } from 'antd'

const { SubMenu } = Menu

const HeaderRight = () => {
    // handleClickMenu = e => {
    //     e.key === 'SignOut' && this.props.onSignOut()
    // }
    return (
        <div style={{ float: 'right', marginRight: '20px', color: 'white' }}>
            <Badge
                count={1}
                dot
            >
                <BellOutlined style={{ fontSize: '22px', color: '#fff' }} />
            </Badge>
            <div style={{ float: 'right', marginLeft: '20px' }}>
                {/* <Menu key="user" mode="horizontal" onClick={this.handleClickMenu}> */}
                <Menu key="user" mode="horizontal">
                    <SubMenu style={{ background: "#001529" }}
                        title={<Avatar src={""} />}>
                        <Menu.Item key="SignOut">
                            Sign out
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        </div>
        //     <Popover
        //     placement="bottomRight"
        //     trigger="click"
        //     key="notifications"
        //     overlayClassName={styles.notificationPopover}
        //     getPopupContainer={() => document.querySelector('#primaryLayout')}
        //     content={
        //       <div className={styles.notification}>
        //         <List
        //           itemLayout="horizontal"
        //           dataSource={notifications}
        //           locale={{
        //             emptyText: <Trans>You have viewed all notifications.</Trans>,
        //           }}
        //           renderItem={item => (
        //             <List.Item className={styles.notificationItem}>
        //               <List.Item.Meta
        //                 title={
        //                   <Ellipsis tooltip lines={1}>
        //                     {item.title}
        //                   </Ellipsis>
        //                 }
        //                 description={moment(item.date).fromNow()}
        //               />
        //               <RightOutlined style={{ fontSize: 10, color: '#ccc' }} />
        //             </List.Item>
        //           )}
        //         />
        //         {notifications.length ? (
        //           <div
        //             onClick={onAllNotificationsRead}
        //             className={styles.clearButton}
        //           >
        //             <Trans>Clear notifications</Trans>
        //           </div>
        //         ) : null}
        //       </div>
        //     }
        //   >
        //     <Badge
        //       count={notifications.length}
        //       dot
        //       offset={[-10, 10]}
        //       className={styles.iconButton}
        //     >
        //       <BellOutlined className={styles.iconFont} />
        //     </Badge>
        //   </Popover>
    );
}

export default HeaderRight;