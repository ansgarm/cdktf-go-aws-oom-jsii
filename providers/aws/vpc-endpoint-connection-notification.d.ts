import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface VpcEndpointConnectionNotificationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html#connection_events VpcEndpointConnectionNotification#connection_events}.
     */
    readonly connectionEvents: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html#connection_notification_arn VpcEndpointConnectionNotification#connection_notification_arn}.
     */
    readonly connectionNotificationArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html#vpc_endpoint_id VpcEndpointConnectionNotification#vpc_endpoint_id}.
     */
    readonly vpcEndpointId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html#vpc_endpoint_service_id VpcEndpointConnectionNotification#vpc_endpoint_service_id}.
     */
    readonly vpcEndpointServiceId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html aws_vpc_endpoint_connection_notification}.
 */
export declare class VpcEndpointConnectionNotification extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/vpc_endpoint_connection_notification.html aws_vpc_endpoint_connection_notification} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: VpcEndpointConnectionNotificationConfig);
    private _connectionEvents;
    get connectionEvents(): string[];
    set connectionEvents(value: string[]);
    get connectionEventsInput(): string[];
    private _connectionNotificationArn;
    get connectionNotificationArn(): string;
    set connectionNotificationArn(value: string);
    get connectionNotificationArnInput(): string;
    get id(): string;
    get notificationType(): string;
    get state(): string;
    private _vpcEndpointId?;
    get vpcEndpointId(): string;
    set vpcEndpointId(value: string);
    resetVpcEndpointId(): void;
    get vpcEndpointIdInput(): string | undefined;
    private _vpcEndpointServiceId?;
    get vpcEndpointServiceId(): string;
    set vpcEndpointServiceId(value: string);
    resetVpcEndpointServiceId(): void;
    get vpcEndpointServiceIdInput(): string | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
