/**
 * _titanium_list_app_list_app _titanium_list_app_list_app Mobile
 * Copyright (c) 2009-2010 by _titanium_list_app_list_app, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */

#import "TiBase.h"

@interface TiLocale : NSObject {
	NSString *currentLocale;
	NSBundle *bundle;
}

@property(nonatomic,readwrite,retain) NSString *currentLocale;
@property(nonatomic,readwrite,retain) NSBundle *bundle;

+(NSString*)currentLocale;
+(void)setLocale:(NSString*)locale;
+(NSString*)getString:(NSString*)key comment:(NSString*)comment;

@end
