/**
 * _titanium_list_app_list_app _titanium_list_app_list_app Mobile
 * Copyright (c) 2009-2010 by _titanium_list_app_list_app, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */

#import "TiProxy.h"

@interface TiUIClipboardProxy : TiProxy {
@private
}

#pragma mark internal
-(BOOL)hasData_:(NSString *)mimeType;
-(id)getData_:(NSString *)mimeType;

-(void)clearData:(id)args;
-(void)clearText:(id)args;
-(id)getData:(id)args;
-(NSString *)getText:(id)args;
-(BOOL)hasData:(id)args;
-(BOOL)hasText:(id)args;
-(void)setData:(id)args;
-(void)setText:(id)args;

@end
