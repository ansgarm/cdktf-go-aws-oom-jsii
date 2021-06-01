import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface LbListenerRuleConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#listener_arn LbListenerRule#listener_arn}.
     */
    readonly listenerArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#priority LbListenerRule#priority}.
     */
    readonly priority?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#tags LbListenerRule#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#tags_all LbListenerRule#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
    /**
     * action block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#action LbListenerRule#action}
     */
    readonly action: LbListenerRuleAction[];
    /**
     * condition block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#condition LbListenerRule#condition}
     */
    readonly condition: LbListenerRuleCondition[];
}
export interface LbListenerRuleActionAuthenticateCognito {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}.
     */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}.
     */
    readonly onUnauthenticatedRequest?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#scope LbListenerRule#scope}.
     */
    readonly scope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_cookie_name LbListenerRule#session_cookie_name}.
     */
    readonly sessionCookieName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_timeout LbListenerRule#session_timeout}.
     */
    readonly sessionTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_arn LbListenerRule#user_pool_arn}.
     */
    readonly userPoolArn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_client_id LbListenerRule#user_pool_client_id}.
     */
    readonly userPoolClientId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_pool_domain LbListenerRule#user_pool_domain}.
     */
    readonly userPoolDomain: string;
}
export interface LbListenerRuleActionAuthenticateOidc {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authentication_request_extra_params LbListenerRule#authentication_request_extra_params}.
     */
    readonly authenticationRequestExtraParams?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authorization_endpoint LbListenerRule#authorization_endpoint}.
     */
    readonly authorizationEndpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#client_id LbListenerRule#client_id}.
     */
    readonly clientId: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#client_secret LbListenerRule#client_secret}.
     */
    readonly clientSecret: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#issuer LbListenerRule#issuer}.
     */
    readonly issuer: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#on_unauthenticated_request LbListenerRule#on_unauthenticated_request}.
     */
    readonly onUnauthenticatedRequest?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#scope LbListenerRule#scope}.
     */
    readonly scope?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_cookie_name LbListenerRule#session_cookie_name}.
     */
    readonly sessionCookieName?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#session_timeout LbListenerRule#session_timeout}.
     */
    readonly sessionTimeout?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#token_endpoint LbListenerRule#token_endpoint}.
     */
    readonly tokenEndpoint: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#user_info_endpoint LbListenerRule#user_info_endpoint}.
     */
    readonly userInfoEndpoint: string;
}
export interface LbListenerRuleActionFixedResponse {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#content_type LbListenerRule#content_type}.
     */
    readonly contentType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#message_body LbListenerRule#message_body}.
     */
    readonly messageBody?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#status_code LbListenerRule#status_code}.
     */
    readonly statusCode?: string;
}
export interface LbListenerRuleActionForwardStickiness {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#duration LbListenerRule#duration}.
     */
    readonly duration: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#enabled LbListenerRule#enabled}.
     */
    readonly enabled?: boolean;
}
export interface LbListenerRuleActionForwardTargetGroup {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#arn LbListenerRule#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#weight LbListenerRule#weight}.
     */
    readonly weight?: number;
}
export interface LbListenerRuleActionForward {
    /**
     * stickiness block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#stickiness LbListenerRule#stickiness}
     */
    readonly stickiness?: LbListenerRuleActionForwardStickiness[];
    /**
     * target_group block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#target_group LbListenerRule#target_group}
     */
    readonly targetGroup: LbListenerRuleActionForwardTargetGroup[];
}
export interface LbListenerRuleActionRedirect {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#host LbListenerRule#host}.
     */
    readonly host?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#path LbListenerRule#path}.
     */
    readonly path?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#port LbListenerRule#port}.
     */
    readonly port?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#protocol LbListenerRule#protocol}.
     */
    readonly protocol?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#query LbListenerRule#query}.
     */
    readonly query?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#status_code LbListenerRule#status_code}.
     */
    readonly statusCode: string;
}
export interface LbListenerRuleAction {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#order LbListenerRule#order}.
     */
    readonly order?: number;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#target_group_arn LbListenerRule#target_group_arn}.
     */
    readonly targetGroupArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#type LbListenerRule#type}.
     */
    readonly type: string;
    /**
     * authenticate_cognito block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authenticate_cognito LbListenerRule#authenticate_cognito}
     */
    readonly authenticateCognito?: LbListenerRuleActionAuthenticateCognito[];
    /**
     * authenticate_oidc block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#authenticate_oidc LbListenerRule#authenticate_oidc}
     */
    readonly authenticateOidc?: LbListenerRuleActionAuthenticateOidc[];
    /**
     * fixed_response block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#fixed_response LbListenerRule#fixed_response}
     */
    readonly fixedResponse?: LbListenerRuleActionFixedResponse[];
    /**
     * forward block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#forward LbListenerRule#forward}
     */
    readonly forward?: LbListenerRuleActionForward[];
    /**
     * redirect block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#redirect LbListenerRule#redirect}
     */
    readonly redirect?: LbListenerRuleActionRedirect[];
}
export interface LbListenerRuleConditionHostHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}.
     */
    readonly values: string[];
}
export interface LbListenerRuleConditionHttpHeader {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_header_name LbListenerRule#http_header_name}.
     */
    readonly httpHeaderName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}.
     */
    readonly values: string[];
}
export interface LbListenerRuleConditionHttpRequestMethod {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}.
     */
    readonly values: string[];
}
export interface LbListenerRuleConditionPathPattern {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}.
     */
    readonly values: string[];
}
export interface LbListenerRuleConditionQueryString {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#key LbListenerRule#key}.
     */
    readonly key?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#value LbListenerRule#value}.
     */
    readonly value: string;
}
export interface LbListenerRuleConditionSourceIp {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#values LbListenerRule#values}.
     */
    readonly values: string[];
}
export interface LbListenerRuleCondition {
    /**
     * host_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#host_header LbListenerRule#host_header}
     */
    readonly hostHeader?: LbListenerRuleConditionHostHeader[];
    /**
     * http_header block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_header LbListenerRule#http_header}
     */
    readonly httpHeader?: LbListenerRuleConditionHttpHeader[];
    /**
     * http_request_method block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#http_request_method LbListenerRule#http_request_method}
     */
    readonly httpRequestMethod?: LbListenerRuleConditionHttpRequestMethod[];
    /**
     * path_pattern block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#path_pattern LbListenerRule#path_pattern}
     */
    readonly pathPattern?: LbListenerRuleConditionPathPattern[];
    /**
     * query_string block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#query_string LbListenerRule#query_string}
     */
    readonly queryString?: LbListenerRuleConditionQueryString[];
    /**
     * source_ip block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html#source_ip LbListenerRule#source_ip}
     */
    readonly sourceIp?: LbListenerRuleConditionSourceIp[];
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html aws_lb_listener_rule}.
 */
export declare class LbListenerRule extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/lb_listener_rule.html aws_lb_listener_rule} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: LbListenerRuleConfig);
    get arn(): string;
    get id(): string;
    private _listenerArn;
    get listenerArn(): string;
    set listenerArn(value: string);
    get listenerArnInput(): string;
    private _priority?;
    get priority(): number;
    set priority(value: number);
    resetPriority(): void;
    get priorityInput(): number | undefined;
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
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    private _action;
    get action(): LbListenerRuleAction[];
    set action(value: LbListenerRuleAction[]);
    get actionInput(): LbListenerRuleAction[];
    private _condition;
    get condition(): LbListenerRuleCondition[];
    set condition(value: LbListenerRuleCondition[]);
    get conditionInput(): LbListenerRuleCondition[];
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
