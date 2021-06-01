import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsLbListenerConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html#load_balancer_arn DataAwsLbListener#load_balancer_arn}.
     */
    readonly loadBalancerArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html#port DataAwsLbListener#port}.
     */
    readonly port?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html#tags DataAwsLbListener#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
export declare class DataAwsLbListenerDefaultActionAuthenticateCognito extends cdktf.ComplexComputedList {
    get authenticationRequestExtraParams(): any;
    get onUnauthenticatedRequest(): string;
    get scope(): string;
    get sessionCookieName(): string;
    get sessionTimeout(): number;
    get userPoolArn(): string;
    get userPoolClientId(): string;
    get userPoolDomain(): string;
}
export declare class DataAwsLbListenerDefaultActionAuthenticateOidc extends cdktf.ComplexComputedList {
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
export declare class DataAwsLbListenerDefaultActionFixedResponse extends cdktf.ComplexComputedList {
    get contentType(): string;
    get messageBody(): string;
    get statusCode(): string;
}
export declare class DataAwsLbListenerDefaultActionForwardStickiness extends cdktf.ComplexComputedList {
    get duration(): number;
    get enabled(): boolean;
}
export declare class DataAwsLbListenerDefaultActionForwardTargetGroup extends cdktf.ComplexComputedList {
    get arn(): string;
    get weight(): number;
}
export declare class DataAwsLbListenerDefaultActionForward extends cdktf.ComplexComputedList {
    get stickiness(): any;
    get targetGroup(): any;
}
export declare class DataAwsLbListenerDefaultActionRedirect extends cdktf.ComplexComputedList {
    get host(): string;
    get path(): string;
    get port(): string;
    get protocol(): string;
    get query(): string;
    get statusCode(): string;
}
export declare class DataAwsLbListenerDefaultAction extends cdktf.ComplexComputedList {
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
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html aws_lb_listener}.
 */
export declare class DataAwsLbListener extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/lb_listener.html aws_lb_listener} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsLbListenerConfig);
    get alpnPolicy(): string;
    get arn(): string;
    get certificateArn(): string;
    defaultAction(index: string): DataAwsLbListenerDefaultAction;
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
