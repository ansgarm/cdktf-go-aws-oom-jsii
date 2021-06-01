import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsAlbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html#load_balancer_arn DataAwsAlbListener#load_balancer_arn}.
     */
    readonly loadBalancerArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html#port DataAwsAlbListener#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html#tags DataAwsAlbListener#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsAlbListenerDefaultActionAuthenticateCognito extends cdktf.ComplexComputedList {
    get authenticationRequestExtraParams(): any;
    get onUnauthenticatedRequest(): string;
    get scope(): string;
    get sessionCookieName(): string;
    get sessionTimeout(): number;
    get userPoolArn(): string;
    get userPoolClientId(): string;
    get userPoolDomain(): string;
}
export declare class DataAwsAlbListenerDefaultActionAuthenticateOidc extends cdktf.ComplexComputedList {
    get authenticationRequestExtraParams(): any;
    get authorizationEndpoint(): string;
    get clientId(): string;
    get clientSecret(): string;
    get issuer(): string;
    get onUnauthenticatedRequest(): string;
    get scope(): string;
    get sessionCookieName(): string;
    get sessionTimeout(): number;
    get tokenEndpoint(): string;
    get userInfoEndpoint(): string;
}
export declare class DataAwsAlbListenerDefaultActionFixedResponse extends cdktf.ComplexComputedList {
    get contentType(): string;
    get messageBody(): string;
    get statusCode(): string;
}
export declare class DataAwsAlbListenerDefaultActionForwardStickiness extends cdktf.ComplexComputedList {
    get duration(): number;
    get enabled(): boolean;
}
export declare class DataAwsAlbListenerDefaultActionForwardTargetGroup extends cdktf.ComplexComputedList {
    get arn(): string;
    get weight(): number;
}
export declare class DataAwsAlbListenerDefaultActionForward extends cdktf.ComplexComputedList {
    get stickiness(): any;
    get targetGroup(): any;
}
export declare class DataAwsAlbListenerDefaultActionRedirect extends cdktf.ComplexComputedList {
    get host(): string;
    get path(): string;
    get port(): string;
    get protocol(): string;
    get query(): string;
    get statusCode(): string;
}
export declare class DataAwsAlbListenerDefaultAction extends cdktf.ComplexComputedList {
    get authenticateCognito(): any;
    get authenticateOidc(): any;
    get fixedResponse(): any;
    get forward(): any;
    get order(): number;
    get redirect(): any;
    get targetGroupArn(): string;
    get type(): string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html aws_alb_listener}.
 */
export declare class DataAwsAlbListener extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/alb_listener.html aws_alb_listener} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsAlbListenerConfig);
    get alpnPolicy(): string;
    get arn(): string;
    get certificateArn(): string;
    defaultAction(index: string): DataAwsAlbListenerDefaultAction;
    get id(): string;
    private _loadBalancerArn?;
    get loadBalancerArn(): string;
    set loadBalancerArn(value: string);
    resetLoadBalancerArn(): void;
    get loadBalancerArnInput(): string | undefined;
    private _port?;
    get port(): number;
    set port(value: number);
    resetPort(): void;
    get portInput(): number | undefined;
    get protocol(): string;
    get sslPolicy(): string;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
