/**
 * _titanium_list_app_list_app _titanium_list_app_list_app Mobile
 * Copyright (c) 2009-2010 by _titanium_list_app_list_app, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */
#ifdef USE_TI_UIBUTTON

#import "TiUIView.h"

@interface TiUIButton : TiUIView {
@private
	UIButton *button;
	int style;
	
	BOOL eventAlreadyTriggered;
    //Variables holding for control state images
    BOOL hasBackgroundForStateNormal;
    BOOL hasBackgroundForStateFocused;
    BOOL hasBackgroundForStateDisabled;
    BOOL hasBackgroundForStateSelected;

}

-(UIButton*)button;

-(void)setEnabled_:(id)value;

@end

#endif