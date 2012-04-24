/**
 * _titanium_list_app_list_app _titanium_list_app_list_app Mobile
 * Copyright (c) 2009-2010 by _titanium_list_app_list_app, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#if defined(USE_TI_XML) || defined(USE_TI_NETWORK)

#import <Foundation/Foundation.h>

@interface TiDOMValidator : NSObject

+(BOOL)checkElementName:(NSString*)pName;
+(BOOL)checkAttributeName:(NSString*)pName;
+(BOOL)checkNamespacePrefix:(NSString*)pName;
+(BOOL)checkNamespaceURI:(NSString*)pName;
@end
#endif