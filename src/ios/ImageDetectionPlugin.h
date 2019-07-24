#import <UIKit/UIKit.h>
#import <opencv2/highgui/cap_ios.h>

#import <Cordova/CDVPlugin.h>

@interface ImageDetectionPlugin : CDVPlugin <CvVideoCameraDelegate>
{
    UIImageView *img;
    CvVideoCamera *camera;
}

@property (nonatomic, retain) CvVideoCamera *camera;
@property (nonatomic, retain) UIImageView *img;

@property (nonatomic, retain) NSString *screenshot_callbackId;
@property cv::Mat taken_screenshot;
@property BOOL  must_take_screenshot;



- (void)initialize:(CDVInvokedUrlCommand*)command;

- (void)greet:(CDVInvokedUrlCommand*)command;

- (void)isDetecting:(CDVInvokedUrlCommand*)command;

- (void)setPatterns:(CDVInvokedUrlCommand*)command;

- (void)startProcessing:(CDVInvokedUrlCommand*)command;

- (void)setDetectionTimeout:(CDVInvokedUrlCommand*)command;

- (void)activeCamera:(CDVInvokedUrlCommand*)command;

- (void)resumeCamera:(CDVInvokedUrlCommand*)command;

- (void)screenshot:(CDVInvokedUrlCommand*)command;

- (void)switchCamera:(CDVInvokedUrlCommand*)command;


@end
