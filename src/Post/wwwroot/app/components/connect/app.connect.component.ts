﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MessageService } from '../../services/message/app.message.service';

/**
 * The component which handles the nickname selection and server connection.
 */
@Component({
    selector: "app-connect",
    templateUrl: "app/components/connect/app.connect.component.html",
    styleUrls: ["app/components/connect/app.connect.component.css"]
})
export class ConnectComponent {
    private nickName = "";

    constructor(private messageService: MessageService) {
        let storedNickName = localStorage.getItem("nickname");

        if (storedNickName !== null) {
            this.nickName = storedNickName;
        }
    }

    private sendConnectionRequest(): void {
        localStorage.setItem("nickname", this.nickName);

        this.messageService.sendConnectionMessage(this.nickName);
    }
}